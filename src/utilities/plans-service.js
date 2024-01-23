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
  console.log("plans-services running");
  return response;
}
