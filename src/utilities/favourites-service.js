import * as favouriteAPI from "./favourites-api";

export async function createFavourite(name, muscle, img) {
  const body = {
    exercise: name,
    muscle: muscle,
    img: img,
  };

  const response = await favouriteAPI.createFavourite(body);
  return response;
}

export async function getFavouriteByUserId() {
  const response = await favouriteAPI.getFavouriteByUserId();
  return response;
}
