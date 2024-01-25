import EditPlanModal from "./EditPlanModal";
import { useState } from "react";
import PlanModalCard from "./PlanModalCard";

export default function PlanModal({ plans, showModal, setShowModal, date }) {
  const [showEditPlanModal, setShowEditPlanModal] = useState(false);

  // WRITE LOGIC HERE TO FILTER OUT PLANS BY DATE
  const dateToMatch = () => {
    const formattedDate = date.toISOString();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  console.log("plans on ");
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

            {plans.map((item, idx) => (
              <PlanModalCard
                key={idx}
                item={item}
                setShowEditPlanModal={setShowEditPlanModal}
              />
            ))}
          </div>
        </div>
      </div>{" "}
      {showEditPlanModal && (
        <>
          <EditPlanModal
            showModal={showModal}
            setShowModal={setShowModal}
            setShowEditPlanModal={setShowEditPlanModal}
          />
          <div className="opacity-25 fixed inset-0 z-40 bg-zinc-50"></div>
        </>
      )}
    </div>
  );
}
