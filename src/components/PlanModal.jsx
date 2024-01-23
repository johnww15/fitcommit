export default function PlanModal({ setShowModal, date }) {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <h1>Workout Plan</h1>

            <button
              type="button"
              className="text-zinc-50 hover:bg-zinc-200 hover:text-zinc-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center"
              onClick={handleCloseModal}
            >
              X<span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <div className="py-2.5 mb-2">
              <h2>{date.toLocaleString()}</h2>
            </div>
            <div className="rounded-lg px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
              Exercise Name - <span>Muscle</span>
            </div>
            <div className="rounded-lg px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
              Exercise Name - <span>Muscle</span>
            </div>
            <div className="rounded-lg px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
              Exercise Name - <span>Muscle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
