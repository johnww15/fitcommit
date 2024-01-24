import { useState } from "react";

export default function EditPlanModal({ setShowModal, setShowEditPlanModal }) {
  const [editPlan, setEditPlan] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
  };

  const handleCloseModal = () => {
    setEditPlan(false);
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
            <div className=" mb-2">
              <h2>{date.toLocaleString()}</h2>
            </div>
            {/* CONVERT TO MAP FUNCTION*/}
            <div className="rounded-lg flex items-center justify-between px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
              <div>Exercise Name</div>
              <div>Muscle</div>
              <button
                className="bg-jade-500 px-1 py-1"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>

            <div className="rounded-lg flex items-center justify-between px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
              <div>Exercise Name</div>
              <div>Muscle</div>
              <button className="bg-jade-500 px-1 py-1">Edit</button>
            </div>
            <div className="rounded-lg flex items-center justify-between px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
              <div>Exercise Name</div>
              <div>Muscle</div>
              <button className="bg-jade-500 px-1 py-1">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
