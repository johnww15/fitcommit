// const { model, Schema } = require("mongoose");
// const bcrypt = require("bcrypt");

// const SALT_ROUNDS = 6;

// const userSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     email: {
//       type: String,
//       unique: true,
//       trim: true,
//       lowercase: true,
//       required: true,
//     },
//     password: {
//       type: String,
//       trim: true,
//       minLength: 3,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//     // removes password entry when transformed to json, so that you wont transfer it to the front end network payload
//     toJSON: {
//       transform: function (doc, ret) {
//         delete ret.password;
//         return ret;
//       },
//     },
//   }
// );

// // put reusable logic in the model itself
// // before the save function, do function
// // middleware
// //* hashes password before saving
// userSchema.pre("save", async function (next) {
//   // 'this' is the user doc
//   // if user does not modify his password
//   if (!this.isModified("password")) return next();
//   // update the password with the computed hash
//   this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
//   return next();
// });

// module.exports = model("User", userSchema);

const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_ROUNDS = 6;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    isPrivate: {
      type: Boolean,
    },
    //reference to entry.js file and entrySchema
    entry: [
      {
        type: Schema.Types.ObjectId,
        ref: "Entry",
      },
    ],
    //reference to favourite.js and favouriteSchema
    favourite: [
      {
        type: Schema.Types.ObjectId,
        ref: "Favourite",
      },
    ],
    //reference to plan.js and planSchema
    plan: [
      {
        type: Schema.Types.ObjectId,
        ref: "Plan",
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
