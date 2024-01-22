const Plan = require("../models/Plan");

//function to create new entry data
const planCreate = async (req, res) => {
  const data = req.body;
  const { userId } = req.params;
  try {
    const createdPlan = await Plan.create(data);
    createdPlan.userId.push(userId);
    await createdPlan.save();
    res.json({ createdPlan });
  } catch (error) {
    console.error("error in planCreate function in planController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to get all entry data
const planIndex = async (req, res) => {
  try {
    const plans = await Plan.find({});
    res.json({ plans });
  } catch (error) {
    console.error("error in planIndex function in planController file", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//function to delete a plan data by planId
const planDelete = async (req, res) => {
    const { planId } = req.params;
    try {
      const deletedPlan = await Plan.findById(planId);
      //find if entry exists, return error 404 if entry doesn't exist
      if (!deletedPlan) {
        return res.status(404).json({ error: "Plan not found" });
      }
      //check if user deleting is the owner of the plan, if it isn't prevent deletion
      // if (!deletedPlan.userId === userId) {
      //   return res.status(403).json({ error: "Unauthorised User Request" });
      // }
      await Plan.findByIdAndDelete(planId);
      res.json({ msg: "Plan successfully deleted" });
    } catch (error) {
      console.error(
        "error in planDelete function in plansController file",
        error
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {
  planIndex,
  planCreate,
  planDelete,
};
