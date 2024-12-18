import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart({ data }) {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Data',
        data: data.map(item => item.value),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'X Axis',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Y Axis',
        },
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Line ref={chartRef} data={chartData} options={chartOptions} />
    </div>
  );
}

export default Chart;
