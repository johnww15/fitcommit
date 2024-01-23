import { useState } from "react";
import { createEntry } from "../utilities/entries-service";

export default function EntriesForm() {
  const [entryFormData, setEntryFormData] = useState({
    date: "",
    exercise: "",
    muscle: "",
    reps: "",
    sets: "",
    weight: "",
  });

  const handleChange = (evt) => {
    setEntryFormData({
      ...entryFormData,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleProgressClick = async (evt) => {
    // POST to add entry into MongoDB - Collection
    evt.preventDefault();
    const response = await createEntry(entryFormData);
    console.log(response);
  };

  //   const response = await fetch("/api/entries/user/65af7674dccd7f24cfa144fd", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       date: entryFormData.date,
  //       exercise: entryFormData.exercise,
  //       muscle: entryFormData.muscle,
  //       reps: entryFormData.reps,
  //       sets: entryFormData.sets,
  //       weight: entryFormData.weight,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log({ evt, entryFormData });
  //   if (response.ok) {
  //     setEntryFormData(createEntry());
  //   }
  // };

  const handleCalendarClick = () => {
    // POST to add entry into MongoDB - Collection
    console.log("calendar to be updated");
  };
  return (
    <section>
      <div className="w-full bg-white rounded-lg shadow border border-jade-700 md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1>Input a new workout:</h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleProgressClick}
          >
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="workout-name"
                  className="block mb-2 text-sm font-medium"
                >
                  Name of workout:
                </label>

                <input
                  type="text"
                  name="exercise"
                  id="exercise"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Bench Press"
                  value={entryFormData.exercise}
                  onChange={handleChange}
                  required=""
                />
              </div>{" "}
              <div>
                <label
                  htmlFor="workout-muscle"
                  className="block mb-2 text-sm font-medium"
                >
                  Muscle
                </label>
                <select
                  id="muscle"
                  name="muscle"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 rounded-lg focus:ring-jade-500 focus:border-jade-500 block w-full p-2.5"
                  value={entryFormData.muscle}
                  onChange={handleChange}
                >
                  <option value="Arms">Arms</option>
                  <option value="Back">Back</option>
                  <option value="Chest">Chest</option>
                  <option value="Legs">Legs</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="workout-name"
                  className="block mb-2 text-sm font-medium"
                >
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Bench Press"
                  value={entryFormData.date}
                  onChange={handleChange}
                  required=""
                />
              </div>
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
                    value={entryFormData.weight}
                    onChange={handleChange}
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
                  name="reps"
                  id="reps"
                  placeholder="10"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={entryFormData.reps}
                  onChange={handleChange}
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
                  value={entryFormData.sets}
                  onChange={handleChange}
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
                    // value={entryFormData.distane}
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
            <div className="grid sm:grid-cols-2 gap-5">
              <button
                type="submit"
                className="w-full bg-jade-500"
                onClick={handleProgressClick}
              >
                Add to Progress
              </button>
              <button
                type="submit"
                className="w-full bg-jade-500"
                onClick={handleCalendarClick}
              >
                Add to Calendar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
