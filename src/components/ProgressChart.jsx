import { Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
import { progressData } from "../assets/test_data/test_progress_data";

export default function ProgressChart() {
  return (
    <div className="flex flex-col h-48 w-full">
      <Line
        data={{
          labels: progressData.map((data) => data.date),
          datasets: [
            {
              data: progressData.map((data) => data.maxWeight),
              backgroundColor: "#fafafa",
              borderColor: "#89fa00",
            },
          ],
        }}
      />
    </div>
  );
}
