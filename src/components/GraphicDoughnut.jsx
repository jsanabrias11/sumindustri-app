
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const GraphicDoughnut = () => {
  const data = {
    // labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        // label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '97%', // Adjust this value to control the thickness of the doughnut
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default GraphicDoughnut;

