export default function EntriesForm() {
  const handleClick = () => {
    // POST to add entry into MongoDB - Collection
    console.log("calendar to be updated");
  };
  return (
    <section>
      <div className="w-full bg-white rounded-lg shadow border border-jade-700 md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1>Input a new workout:</h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor="workout-name"
                className="block mb-2 text-sm font-medium"
              >
                Name of workout:
              </label>
              <input
                type="text"
                name="workout-name"
                id="workout-name"
                className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Bench Press"
                required=""
              />
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div>
                <label
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium"
                >
                  Weight:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="20"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                  kg
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
                  Repetitions:
                </label>
                <input
                  type="number"
                  name="repetitions"
                  id="repetitions"
                  placeholder="10"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label
                  htmlFor="sets"
                  className="block mb-2 text-sm font-medium"
                >
                  Sets:
                </label>
                <input
                  type="number"
                  name="sets"
                  id="sets"
                  placeholder="4"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="distance"
                  className="block mb-2 text-sm font-medium"
                >
                  Distance:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="distance"
                    id="distance"
                    placeholder="10"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  km
                </div>
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block mb-2 text-sm font-medium"
                >
                  Time:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="time"
                    id="time"
                    placeholder="20"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  mins
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-jade-500"
              onClick={handleClick}
            >
              Add to Progress
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
