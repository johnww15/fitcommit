import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import PlanModal from "./PlanModal";

export default function CalendarCard({ plans, setPlans, user, setUser }) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [scheduledDates, setScheduledDates] = useState([]);

  const handleClickDay = (event) => {
    // console.log("date before", date);
    setDate(event);
    // console.log("event:", event);
  };

  useEffect(() => {
    // This code will run whenever the 'date' state is updated

    if (date !== "") {
      console.log("date after set state", date);
      setShowModal(true);
    }
  }, [date]);

  // change color of tile
  // PLANS

  useEffect(() => {
    const arrOfUniqueDates = () => {
      const arrOfDates = plans.map((item) => item.date);
      let arr = [];
      for (let i = 0; i < arrOfDates.length; i++) {
        if (!arr.includes(arrOfDates[i])) {
          arr.push(arrOfDates[i]);
        }
      }

      const arrOfFormattedDates = arr.map(
        (item) => new Date(item).toISOString().split("T")[0]
      );

      return arrOfFormattedDates;
    };

    setScheduledDates(arrOfUniqueDates());
  }, [plans]);

  console.log("scheduledDates:", scheduledDates);

  function dateToYYYYMMDD(inputDateString) {
    const inputDate = new Date(inputDateString);
    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = inputDate.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // const tileClassName = ({ date, view }) => {
  //   const today = new Date();
  //   today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0

  //   if (view === "month") {
  //     if (date > today) {
  //       return "future-date"; // Add a class for future dates
  //     }
  //   }

  //   return null;
  // };

  const tileContent = ({ date, view }) => {
    console.log(
      "datecontentofcaltile",
      date,
      dateToYYYYMMDD(date),
      scheduledDates
    );

    if (view === "month" && scheduledDates.includes(dateToYYYYMMDD(date))) {
      return (
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "50%",
            height: "10px",
            width: "10px",
          }}
        ></div>
      );
    }
  };

  return (
    <div className=" items-center justify-center px-6 py-8 mx-auto lg:py-0 w-13/4">
      <Calendar
        className="rounded-lg bg-zinc-800 justify-center text-center "
        onClickDay={handleClickDay}
        tileContent={tileContent}
        tileClassName={({ date, view }) =>
          view === "month" &&
          scheduledDates.includes(date.toISOString().split("T")[0])
            ? "scheduled"
            : null
        }
      />
      {showModal && (
        <>
          <PlanModal
            showModal={showModal}
            setShowModal={setShowModal}
            plans={plans}
            date={date}
            setPlans={setPlans}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
