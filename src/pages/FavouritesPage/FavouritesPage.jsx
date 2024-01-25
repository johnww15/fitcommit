import { useState, useEffect } from "react";
import FavouritesCard from "../../components/FavouritesCard";
import { getFavouriteByUserId } from "../../utilities/favourites-service";

export default function FavouritesPage() {
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await getFavouriteByUserId();
      console.log("testing", response);
      setFavItems(response.favourites);
    })();
  }, []);

  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>My Saved Workouts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:flex-row">
        {favItems.map((favourites, idx) => (
          <div key={idx}>
            <FavouritesCard favourites={favourites} setFavItems={setFavItems} />
          </div>
        ))}
      </div>
    </section>
  );
}

//   return (
//     <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
//       <h1>My Saved Workouts</h1>

//       {favorites.map((favorites, idx) => (
//         <div key={idx} className="flex flex-col md:flex-row">
//           <FavouritesCard favorites={favorites} />
//         </div>
//       ))}
//     </section>
//   );
// }
