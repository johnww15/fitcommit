import * as favouriteAPI from "./favourites-api";

export async function createFavourite(name, muscle) {
  const body = {
    exercise: name,
    muscle: muscle,
  };

  const response = await favouriteAPI.createFavourite(body);
  return response;
}
