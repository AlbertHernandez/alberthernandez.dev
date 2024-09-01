export const getYearsFromDate = (
  date: Date,
  options: { mockDate?: Date } = {},
): number => {
  const now = options.mockDate || new Date();
  let years = now.getFullYear() - date.getFullYear();
  const monthDifference = now.getMonth() - date.getMonth();
  const dayDifference = now.getDate() - date.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    years--;
  }

  if (years < 0) {
    return 0;
  }

  return years;
};
