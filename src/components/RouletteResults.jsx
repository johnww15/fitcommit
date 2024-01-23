import { useState } from "react";
import AddToCalendarModal from "./AddToCalendarModal";

export default function RouletteResults({ item }) {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="flex flex-col rounded-lg px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
      <img src={item.img} className="object-cover h-32 w-full" />
      <div className="px-6 py-4">
        <p>{item.muscle}</p>
        <h1>{item.name}</h1>
      </div>
      <button onClick={handleClick} className="bg-jade-500 px-1.5 py-1">
        + Calendar
      </button>
      <button className="bg-jade-500 px-1.5 py-1">+ Favourites</button>
      {showModal && (
        <>
          <AddToCalendarModal setShowModal={setShowModal} />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
