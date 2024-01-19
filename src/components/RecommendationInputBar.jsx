export default function RecommendationsInputBar() {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-jade-600 focus:border-jade-600 block w-full p-2.5"
          placeholder="e.g. chest"
          required
        />
        <button
          type="submit"
          className="absolute end-2.5 bottom-2.5 bg-jade-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}
