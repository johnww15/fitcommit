const BASE_URL = "/api/users";

//sign up
export async function signUp(userData) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    console.log("return json");
    return res.json();
  } else {
    console.log("error in signup");
    throw new Error("Invalid Sign Up");
  }
}

//log in
export async function login(userData) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    console.log("return json");
    return res.json();
  } else {
    console.log("error in log in");
    throw new Error("Invalid log in");
  }
}
