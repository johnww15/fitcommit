export default function EntriesCard({ item }) {
  return (
    <>
      <div className="rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
        <h1>{item.entry_date}</h1>
        <p>
          {item.entry_exercise} - {item.entry_weight}kg
        </p>
      </div>
    </>
  );
}
