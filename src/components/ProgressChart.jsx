import { Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

export default function ProgressChart() {
  return (
    <section>
      <div>
        {" "}
        <Line
          data={{
            labels: ["A", "B", "C"],
            datasets: [{ data: [200, 300, 400] }],
          }}
        />
      </div>
    </section>
  );
}
