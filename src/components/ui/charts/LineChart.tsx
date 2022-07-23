import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Title, Tooltip, Legend);

interface Props {
  labels: string[];
  datas: string[];
  yAxisLabel?: string;
  xAxisLabel?: string;
}

const LineChart = ({ labels, datas, yAxisLabel = '', xAxisLabel = '' }: Props) => {
  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: datas,
            fill: true,
            borderColor: '#7F56D9',
            backgroundColor: 'rgba(249, 245, 255, 0.6)',
            pointRadius: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,

            title: {
              display: yAxisLabel !== '' ? true : false,
              text: yAxisLabel,
              color: '#667085',
              padding: {
                bottom: 12,
              },
            },
          },
          x: {
            beginAtZero: true,
            title: {
              display: yAxisLabel !== '' ? true : false,
              text: xAxisLabel,
              color: '#667085',
              padding: {
                top: 12,
              },
            },
          },
        },
      }}
    />
  );
};

export default React.memo(LineChart);
