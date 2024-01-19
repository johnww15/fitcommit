export default function RecommendationsResults() {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h2>All results of the search go here:</h2>
      <div className="grid grid-cols-5 gap-10">
        <div className="rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
          Chest Exercise 01
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          Chest Exercise 02
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          Chest Exercise 03
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          Chest Exercise 04
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          Chest Exercise 05
        </div>
      </div>
    </section>
  );
}
