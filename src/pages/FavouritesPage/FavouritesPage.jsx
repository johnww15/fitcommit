import { useState } from "react";
import FavouritesCard from "../../components/FavouritesCard";

export default function FavouritesPage({ favorites }) {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>My Saved Workouts</h1>

      {favorites.map((favorites, idx) => (
        <div key={idx} className="flex flex-col md:flex-row">
          <FavouritesCard favorites={favorites} />
        </div>
      ))}
    </section>
  );
}

// export default function FavouritesPage({ favorites }) {
//   return (
//     <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
//       <h1>My Saved Workouts</h1>

//       <div className="flex flex-col md:flex-row">
//         {favorites.map((favorite, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col rounded-lg px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700"
//           >
//             <img src={favorite.img} className="object-cover h-32 w-full" />
//             <div className="px-6 py-4">
//               <p>{favorite.muscle}</p>
//               <h1>{favorite.name}</h1>
//             </div>
//             {/* Add to Calendar and Add to Favorites buttons go here */}
//             {/* Display favorite item details here */}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
