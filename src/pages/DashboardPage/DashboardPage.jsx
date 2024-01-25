import CalendarCard from "../../components/CalendarCard";
import { useState, useEffect } from "react";
import EntriesCard from "../../components/EntriesCard";
import { fetchAllEntriesById } from "../../utilities/entries-service";
import { fetchAllPlansById } from "../../utilities/plans-service";

export default function DashboardPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    (async function () {
      const responseEntries = await fetchAllEntriesById();
      const responsePlans = await fetchAllPlansById();
      console.log("entries", responseEntries);
      console.log("plans", responsePlans);
    })();
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
