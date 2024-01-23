import * as entryAPI from "./entries-api";

export async function createEntry(entryFormData) {
  const body = {
    date: entryFormData.date,
    exercise: entryFormData.exercise,
    muscle: entryFormData.muscle,
    reps: entryFormData.reps,
    sets: entryFormData.sets,
    weight: entryFormData.weight,
  };

  const response = await entryAPI.createEntry(body);
  console.log("entries-services running");
  return response;
}
