import { useState, useEffect } from "react";
import FavouritesCard from "../../components/FavouritesCard";
import { getFavouriteByUserId } from "../../utilities/favourites-service";

export default function FavouritesPage() {
  useEffect(() => {
    (async function () {
      const response = await getFavouriteByUserId();
      console.log(response);
    })();
  }, []);

  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>My Saved Workouts</h1>

      <div className="flex flex-col md:flex-row">
        <FavouritesCard />
      </div>
    </section>
  );
}
