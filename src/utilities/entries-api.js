const BASE_URL = "/api/entries";

export async function createEntry(body) {
  const res = await fetch(BASE_URL + "/user/65af7674dccd7f24cfa144fd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return json;
    // throw new Error("Create Event Error");
  }
}

export async function getEntryByExercise(exercise) {
  // console.log("entries-api", exercise);
  const res = await fetch(
    BASE_URL + `/exercise/${exercise}/7/65af7674dccd7f24cfa144fd`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}
