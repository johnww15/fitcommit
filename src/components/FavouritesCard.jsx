import { useState } from "react";
import AddToCalendarModal from "./AddToCalendarModal";

export default function FavouritesCard({ favorites }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleRemove = () => {
    alert("remove from favourites");
  };

  return (
    <>
      <div className="flex flex-col rounded-lg text-sm px-5 py-2.5 m-2 bg-zinc-800 border border-jade-700">
        <img className="object-cover h-32 w-full" src={favorites.img} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{favorites.name}</div>
          <p>{favorites.muscle}</p>
        </div>
        <div className="grid grid-cols-2 px-6 pt-4 pb-2 gap-5">
          <button className="bg-jade-500 px-1.5 py-1" onClick={handleClick}>
            + Calendar
          </button>
          <button
            className="bg-zinc-500 text-zinc-200 hover:bg-zinc-600 px-1.5 py-1"
            onClick={handleRemove}
          >
            Remove
          </button>
          {showModal && (
            <>
              <AddToCalendarModal setShowModal={setShowModal} />
              <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
