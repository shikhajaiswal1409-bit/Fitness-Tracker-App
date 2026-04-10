import { formatDateKey } from "../utils/dateUtils";

export const getWeeklyStats = (schedule, startDate) => {

  const start = new Date(startDate);
  const today = new Date();

  const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const weekNumber = Math.floor(diffDays / 7);

  const weekStart = new Date(start);
  weekStart.setDate(start.getDate() + weekNumber * 7);

  let totalIntake = 0;
  let totalBurned = 0;

  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);

    const key = formatDateKey(d);
    const dayData = schedule[key] || [];

    dayData.forEach((item) => {
      if (item.type === "meal") {
        totalIntake += Number(item.calories || 0);
      }

      if (item.type === "exercise") {
        totalBurned += Number(item.calories || 0);
      }
    });
  }

  return { totalIntake, totalBurned };
};