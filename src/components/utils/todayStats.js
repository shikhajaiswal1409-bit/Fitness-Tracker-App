export const getTodayStats = (schedule) => {
  if (!schedule) {
    return { exercise: 0, meals: 0, sleep: 0 };
  }

  const todayKey = new Date().toISOString().split("T")[0];

  const activities = schedule[todayKey] || [];

  let exercise = 0;
  let meals = 0;
  let sleep = 0;

  activities.forEach((item) => {
    if (item.type === "exercise") exercise += 1;
    if (item.type === "meal") meals += 1;
    if (item.type === "sleep") sleep += Number(item.hours || 0);
  });

  return {
    exercise,
    meals,
    sleep,
  };
};