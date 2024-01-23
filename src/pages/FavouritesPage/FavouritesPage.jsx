import { useState } from "react";
import FavouritesCard from "../../components/FavouritesCard";

export default function FavouritesPage() {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>My Saved Workouts</h1>

      <div className="flex flex-col md:flex-row">
        <FavouritesCard />
      </div>
    </section>
  );
}
