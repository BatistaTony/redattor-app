export const options = {
  responsive: true,
  borderRadius: 6,

  scales: {
    y: {
      grid: {
        drawBorder: false,
      },

      ticks: {
        callback: (label: number | string) => `${label} P`,
        color: '#A1A7AA',
        font: { family: 'Roboto', size: 16, style: 'normal' },
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#A1A7AA',
        font: { family: 'Roboto', size: 16, style: 'normal' },
      },
    },
  },

  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => 5000),
      backgroundColor: '#474C50',
    },
    {
      data: labels.map(() => 4000),
      backgroundColor: '#4684F7',
    },
    {
      data: labels.map(() => 1000),
      backgroundColor: '#89B6FF',
    },
  ],
};
