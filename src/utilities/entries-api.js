const BASE_URL = "/api/entries";

export async function createEntry(body) {
  const res = await fetch(BASE_URL + "/user/65af7674dccd7f24cfa144fd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log("entries-api running");
  const json = await res.json();
  if (res.ok) {
    return json;
  } else {
    return json;
    // throw new Error("Create Event Error");
  }
}

export async function getEntryByExercise() {
  const res = await fetch(
    BASE_URL + "/exercise/Bench%20Press/5/65af7674dccd7f24cfa144fd",
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const json = await res.json();
  console.log("entries-api ran", res);
  if (res.ok) {
    return json;
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}
