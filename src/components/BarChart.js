import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "red",
              borderColor: "blue",
            },
            {
              label: "Quantity",
              data: [120, 129, 34, 54, 26, 32],
              backgroundColor: "orange",
            },
          ],
        }}
        height={400}
        width={40}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
