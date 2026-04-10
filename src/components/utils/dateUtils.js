
//  SINGLE SOURCE OF TRUTH
export const getDateKey = (date = new Date()) => {
  return new Date(date).toLocaleDateString("en-CA"); 
  // YYYY-MM-DD (LOCAL timezone) 
};

//  USE EVERYWHERE
export const formatDateKey = (date) => {
  return getDateKey(date);
};

export const getTodayKey = () => {
  return getDateKey();
};

//  WEEK CALCULATION 
export const getWeekData = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffDays = Math.floor(
    (today - start) / (1000 * 60 * 60 * 24)
  );

  const weekNumber = Math.floor(diffDays / 7) + 1;

  const weekStart = new Date(start);
  weekStart.setDate(start.getDate() + (weekNumber - 1) * 7);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const format = (d) =>
    d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  return {
    weekNumber,
    range: `${format(weekStart)} – ${format(weekEnd)}`,
    weekStart,
  };
};

//  FIXED FUTURE CHECK
export const isFutureDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const d = new Date(date);
  d.setHours(0, 0, 0, 0);

  return d > today;
};