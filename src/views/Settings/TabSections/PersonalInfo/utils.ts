import { holes } from '@utils/holes';

export const profileOptions = () => {
  const objectToArr = Object.entries(holes);

  return objectToArr.map(([key, value]) => ({ label: value, value: key }));
};
