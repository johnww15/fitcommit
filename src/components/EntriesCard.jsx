export default function EntriesCard({ entry }) {
  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };
  console.log("user", user);

  const pastFiveEntries = user?.entry
    .slice(0, 5) // Get the first 5 entries
    .filter((entry) => new Date(entry.date) <= new Date());

  return (
    <>
      {pastFiveEntries.map((pastEntry) => (
        <div
          key={pastEntry.date}
          className="rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700"
        >
          <h1>{formatDate(pastEntry.date)}</h1>
          <p>
            {pastEntry.exercise} - {pastEntry.weight}kg
          </p>
        </div>
      ))}
    </>
  );
}

//   return (
//     <>
//       <div className="rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
//         <h1>{formatDate(entry.date)}</h1>
//         <p>
//           {entry.exercise} - {entry.weight}kg
//         </p>
//       </div>
//     </>
//   );
// }
