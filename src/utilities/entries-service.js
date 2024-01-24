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
  return response;
}

export async function getEntryByExercise() {
  console.log("entries-services running");
  const response = await entryAPI.getEntryByExercise();
  console.log("entries-services ran");
  return response;
}
