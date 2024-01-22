import CalendarCard from "../../components/Calendar";
import { useState, useEffect } from "react";
import EntriesCard from "../../components/EntriesCard";

export default function DashboardPage() {
  const [entries, setEntries] = useState([]);

  // code from json-server (fake API) - to be moved to utilities entries-api.js
  // REST API endpoints: /entries?entry_date
  useEffect(() => {
    async function fetchEntries() {
      const response = await fetch("http://localhost:3000/entries", {
        headers: { "Content-Type": "application/json" },
      });
      const jsonEntries = await response.json();
      console.log(jsonEntries);
      setEntries(jsonEntries);
    }

    fetchEntries();
  }, []);
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>Dashboard</h1>
      <CalendarCard />
      <hr />
      <h1>History of the past 5 exercises</h1>
      <div className="grid grid-cols-5 gap-10">
        {entries?.map((item, idx) => (
          <EntriesCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
