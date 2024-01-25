import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PlanModal from "./PlanModal";

export default function CalendarCard({ plans, user, setUser }) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");

  const handleClickDay = (event) => {
    console.log("date before", date);
    setDate(event);
    console.log("event:", event);
  };

  useEffect(() => {
    // This code will run whenever the 'date' state is updated

    if (date !== "") {
      console.log("date after set state", date);
      setShowModal(true);
    }
  }, [date]);

  return (
    <div className=" items-center justify-center px-6 py-8 mx-auto lg:py-0 w-13/4">
      <Calendar
        className="rounded-lg bg-zinc-800 justify-center text-center "
        onClickDay={handleClickDay}
      />
      {showModal && (
        <>
          <PlanModal
            showModal={showModal}
            setShowModal={setShowModal}
            plans={plans}
            date={date}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
