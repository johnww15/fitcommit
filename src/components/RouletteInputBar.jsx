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

        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a muscle group:</option>
          <option value="Arms">Arms</option>
          <option value="Back">Back</option>
          <option value="Chest">Chest</option>
          <option value="Legs">Legs</option>
        </select>

        <button type="submit" className=" bg-jade-500 block w-full p-2.5">
          Search
        </button>
      </form>
    </section>
  );
}
