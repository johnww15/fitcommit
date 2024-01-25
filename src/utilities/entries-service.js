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

export async function getEntryByExercise(selectedExercise) {
  const response = await entryAPI.getEntryByExercise(selectedExercise);
  return response;
}

export async function fetchAllEntriesById() {
  const response = await entryAPI.fetchAllEntriesById();
  return response;
}
