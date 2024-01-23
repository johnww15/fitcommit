import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarModal from "./CalendarModal";

export default function CalendarCard() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");

  const handleClickDay = (event) => {
    setShowModal(true);
    setDate(event);
  };

  return (
    <div className=" items-center justify-center px-6 py-8 mx-auto lg:py-0 w-13/4">
      <Calendar
        className="rounded-lg bg-zinc-800 justify-center text-center "
        onClickDay={handleClickDay}
      />

      {showModal && (
        <>
          <CalendarModal setShowModal={setShowModal} date={date} />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
