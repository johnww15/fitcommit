import Calendar from "../../components/Calendar";

export default function DashboardPage() {
  return (
    <section className="items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1>Dashboard</h1>
      <Calendar />
      <hr />
      <h1>History of the past 5 exercises</h1>
      <div className="grid grid-cols-5 gap-10">
        <div className="rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-800 border border-jade-700">
          <h1>Today</h1>
          <p>Squats - 40 kg</p>
          <p>Leg Press - 40 kg</p>
          <p>Abductor - 40 kg</p>
          <p>Adductor - 40 kg</p>
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          <h1>Yesterday</h1>
          <p>Squats - 40 kg</p>
          <p>Leg Press - 40 kg</p>
          <p>Abductor - 40 kg</p>
          <p>Adductor - 40 kg</p>
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          <h1>17 Jan</h1>
          <p>Squats - 40 kg</p>
          <p>Leg Press - 40 kg</p>
          <p>Abductor - 40 kg</p>
          <p>Adductor - 40 kg</p>
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          <h1>15 Jan</h1>
          <p>Squats - 40 kg</p>
          <p>Leg Press - 40 kg</p>
          <p>Abductor - 40 kg</p>
          <p>Adductor - 40 kg</p>
        </div>
        <div className="bg-zinc-800 border border-jade-700 rounded-lg text-sm px-5 py-2.5 mb-2">
          <h1>09 Jan</h1>
          <p>Squats - 40 kg</p>
          <p>Leg Press - 40 kg</p>
          <p>Abductor - 40 kg</p>
          <p>Adductor - 40 kg</p>
        </div>
      </div>
    </section>
  );
}
