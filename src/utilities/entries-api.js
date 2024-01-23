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
