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
