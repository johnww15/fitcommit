import * as planAPI from "./plans-api";

export async function createPlan(entryFormData) {
  const body = {
    date: entryFormData.date,
    exercise: entryFormData.exercise,
    muscle: entryFormData.muscle,
    reps: entryFormData.reps,
    sets: entryFormData.sets,
    weight: entryFormData.weight,
  };

  const response = await planAPI.createPlan(body);
  return response;
}

export async function fetchAllPlansById() {
  const response = await planAPI.fetchAllPlansById();
  return response;
}

export async function updatePlan(planId, updatePlanBody) {
  const planBody = {
    date: updatePlanBody.date,
    exercise: updatePlanBody.exercise,
    muscle: updatePlanBody.muscle,
    reps: updatePlanBody.reps,
    sets: updatePlanBody.sets,
    weight: updatePlanBody.weight,
  };
  console.log("plansservice", planBody);
  const response = await planAPI.updatePlan(planId, planBody);
  return response;
}
