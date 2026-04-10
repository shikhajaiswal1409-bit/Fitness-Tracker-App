
import { getDateKey } from "../utils/dateUtils";

export const generateWeeklyChartData = (schedule) => {

  const today = new Date();

  return Array.from({ length: 7 }).map((_, i) => {

    const d = new Date();
    d.setDate(today.getDate() - (6 - i));

    //  FIXED DATE KEY (LOCAL)
    const key = getDateKey(d);

    const activities = schedule?.[key] || [];

    let exercise = 0;
    let meals = 0;
    let sleep = 0;

    activities.forEach((item) => {
      if (item.type === "exercise") exercise += 1;
      if (item.type === "meal") meals += 1;
      if (item.type === "sleep") sleep += Number(item.hours || 0);
    });

    return {
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      exercise,
      meals,
      sleep,
    };
  });
};