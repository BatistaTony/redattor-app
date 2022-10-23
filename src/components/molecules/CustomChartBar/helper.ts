const colors = {
  low: '#4684F7',
  medium: '#89B6FF',
  long: '#474C50',
};

export const getBarColorByPercentage = (percentage: number): string => {
  if (percentage <= 40) return colors.low;

  if (percentage > 40 && percentage <= 70) return colors.medium;

  if (percentage > 70 && percentage <= 100) return colors.long;

  return '';
};

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      barThickness: 20,
      borderRadius: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  y: {
    grid: {
      display: false,
    },
  },
  x: {
    grid: {
      display: false,
    },
  },
  xAxes: [
    {
      gridLines: {
        display: false,
      },
    },
  ],
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Out',
  'Nov',
  'Dec',
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => 70),
      backgroundColor: '#4684F7',
    },
  ],
};
