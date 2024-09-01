export const getYearsFromDate = (date: Date): number => {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const monthDifference = now.getMonth() - date.getMonth();
  const dayDifference = now.getDate() - date.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    years--;
  }

  return years;
};
