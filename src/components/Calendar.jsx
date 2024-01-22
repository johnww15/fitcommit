import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const handleClickDay = () => {
  alert("day is clicked");
};
export default function CalendarCard() {
  return (
    <div className=" items-center justify-center px-6 py-8 mx-auto lg:py-0 w-1/2">
      <Calendar
        className="rounded-lg bg-zinc-800 justify-center text-center "
        onClickDay={handleClickDay}
      />
    </div>
  );
}
