export default function AddToCalendarModal({ setShowModal }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectDate = () => {
    alert("date is selected!");
  };

  const handleAddDate = () => {
    //CODE TO ADD TO ENTRIES DB
    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>Save to Calendar</h1>
            <button
              type="button"
              className="text-zinc-50 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleCloseModal}
            >
              X<span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 text-left">
                <label className="block mb-2 text-sm font-medium">
                  Pick a date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                  onChange={handleSelectDate}
                />
              </div>
            </div>
            <button
              type="button"
              className="text-white inline-flex items-center bg-jade-500 hover:bg-jade-800 focus:ring-4 focus:outline-none focus:ring-zeal-300 font-medium rounded-lg px-5 py-2.5 text-center"
              onClick={handleAddDate}
            >
              Add to Calendar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
