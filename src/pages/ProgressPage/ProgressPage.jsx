import ProgressChart from "../../components/ProgressChart";
import { useNavigate } from "react-router-dom";

export default function ProgressPage() {
  const navigate = useNavigate();

  // this click directs user to the EntriesPage
  const handleClick = () => {
    navigate("/progress/new");
  };
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>Charts by exercise</h1>
      <ProgressChart />
      <button className="bg-jade-500" onClick={handleClick}>
        Add new entry
      </button>
    </section>
  );
}
