const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    user_name: { type: String, required: true },
    user_email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    user_password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    //reference to entry.js file and entrySchema
    user_entry: [
      {
        type: Schema.Types.ObjectId,
        ref: "Entry",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = model("User", userSchema);
