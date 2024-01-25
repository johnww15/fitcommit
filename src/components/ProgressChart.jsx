import { Bar, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
// import { progressData } from "../assets/test_data/test_progress_data";
import { useEffect, useState } from "react";
import { getEntryByExercise } from "../utilities/entries-service";

// ----- //
// exercise/:exerciseName/:limit/:userId
// if you search for "benchpress" => "BeNcHPrEss" !=> "Bench Press" (exerciseName)
// limit => 5

export default function ProgressChart({ defaultOption, progressData }) {
  console.log("Default Option", defaultOption);

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "2-digit",
    });
    return formattedDate;
  };

  return (
    <>
      <Line
        data={{
          labels: progressData.map((data) => formatDate(data.date)),
          datasets: [
            {
              data: progressData.map((data) => data.weight),
              backgroundColor: "#fafafa",
              borderColor: "#89fa00",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: progressData[0]?.exercise,
              font: { size: 16 },
              color: "#89fa00",
              align: "start",
            },
            legend: { display: false },
            scales: {
              y: { min: 0, max: 50 },
            },
          },
        }}
      />
    </>
  );
}
