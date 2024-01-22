import ProgressChart from "../../components/ProgressChart";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProgressPage() {
  // code from json-server (fake API)
  useEffect(() => {
    async function fetchEntries() {
      const response = await fetch("http://localhost:3000/entries", {
        headers: { "Content-Type": "application/json" },
      });
      const jsonEntries = await response.json();
      console.log(jsonEntries);
    }

    fetchEntries();
  }, []);

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
