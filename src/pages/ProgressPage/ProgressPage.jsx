import ProgressChart from "../../components/ProgressChart";

export default function ProgressPage() {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>Charts by exercise</h1>
      <ProgressChart />
      <button>Add new entry</button>
    </section>
  );
}
