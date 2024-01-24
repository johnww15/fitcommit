import { useState } from "react";
// import FavouritesCard from "../../components/FavouritesCard";

// export default function FavouritesPage() {
//   return (
//     <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
//       <h1>My Saved Workouts</h1>

//       <div className="flex flex-col md:flex-row">
//         {/* <FavouritesCard /> */}
//       </div>
//     </section>
//   );
// }

export default function FavouritesPage({ favorites }) {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>My Saved Workouts</h1>

      <div className="flex flex-col md:flex-row">
        {favorites.map((favorite, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-lg px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700"
          >
            {/* Display favorite item details here */}
          </div>
        ))}
      </div>
    </section>
  );
}
