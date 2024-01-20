export default function RouletteInputBar() {
  return (
    <section className="px-6 py-8">
      <h1>Search by muscle group:</h1>
      <form className="grid grid-cols-2 gap-10 items-center justify-center mx-auto lg:py-0">
        <label
          htmlFor="default-search"
          className="text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>

        <input
          type="search"
          id="default-search"
          className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-jade-600 focus:border-jade-600 block w-full"
          placeholder="e.g. chest"
          required
        />

        <button type="submit" className=" bg-jade-500 block w-full p-2.5">
          Search
        </button>
      </form>
    </section>
  );
}
