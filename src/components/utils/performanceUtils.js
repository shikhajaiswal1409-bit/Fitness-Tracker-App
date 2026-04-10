import { formatDateKey } from "../utils/dateUtils";


//  TODAY PERFORMANCE
export const getTodayPerformance = (schedule, profile) => {

  const todayKey = formatDateKey(new Date());
  const todayData = schedule[todayKey] || [];

  let gained = 0;
  let burned = 0;

  todayData.forEach((item) => {
    if (item.type === "meal") {
      gained += Math.max(0, Number(item.calories || 0));
    }
    if (item.type === "exercise") {
      burned += Math.max(0, Number(item.calories || 0));
    }
  });

  const net = gained - burned;

  const tolerance = 200;

  let status = "OFF TRACK";

  if (profile.goal === "muscles") {
    status = net >= 200 ? "ON TRACK" : "OFF TRACK";
  }

  if (profile.goal === "weight") {
    status = net <= -200 ? "ON TRACK" : "OFF TRACK";
  }

  if (profile.goal === "balance") {
    status = Math.abs(net) <= tolerance ? "ON TRACK" : "OFF TRACK";
  }

  return { gained, burned, net, status, tolerance };
};



//  STREAK
export const calculateStreak = (schedule, profile) => {

  let streak = 0;

  for (let i = 0; i < 30; i++) {

    const d = new Date();
    d.setDate(d.getDate() - i);

    const key = formatDateKey(d);
    const dayData = schedule[key] || [];

    //  skip empty days
    if (dayData.length === 0) continue;

    let gained = 0;
    let burned = 0;

    dayData.forEach((item) => {
      if (item.type === "meal") gained += Number(item.calories || 0);
      if (item.type === "exercise") burned += Number(item.calories || 0);
    });

    const net = gained - burned;

    let isOnTrack = false;

    if (profile.goal === "muscles") isOnTrack = net >= 200;
    if (profile.goal === "weight") isOnTrack = net <= -200;
    if (profile.goal === "balance") isOnTrack = Math.abs(net) <= 200;

    if (isOnTrack) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};



//  SUGGESTION
export const getSuggestion = (goal, net, tolerance) => {

  if (goal === "muscles") {
    if (net < 0) return "You're in deficit — eat more 🍗";
    if (net < 200) return "Slight surplus — increase calories 💪";
    return "Perfect muscle gain zone 🔥";
  }

  if (goal === "weight") {
    if (net > 0) return "Calorie surplus — reduce intake ⚠️";
    if (net > -200) return "Small deficit — push harder 🏃";
    return "Great fat loss zone 🔥";
  }

  if (goal === "balance") {
    if (Math.abs(net) > tolerance)
      return "Try balancing intake & burn ⚖️";
    return "Perfect balance 👍";
  }

  return "";
};



//  NET COLOR (moved from UI → logic)
export const getNetColor = (goal, net) => {
  if (goal === "weight") return net < 0 ? "#22c55e" : "#ef4444";
  if (goal === "muscles") return net > 0 ? "#22c55e" : "#ef4444";
  if (goal === "balance") return Math.abs(net) < 200 ? "#22c55e" : "#ef4444";
  return "#000";
};