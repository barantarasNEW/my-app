export const getTimeFormat = (date: string) => {
  return date.split(' at ')[1];
};