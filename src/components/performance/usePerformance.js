import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  getTodayPerformance,
  calculateStreak,
  getSuggestion,
  getNetColor
} from "../utils/performanceUtils";

import { setStreak } from "../../features/profile/profileSlice";

const usePerformance = () => {

  const dispatch = useDispatch();

  const schedule = useSelector((state) => state.schedule);
  const profile = useSelector((state) => state.profile);

  const performance = getTodayPerformance(schedule, profile);

  //  update streak
  useEffect(() => {
    const streak = calculateStreak(schedule, profile);
    dispatch(setStreak(streak));
  }, [schedule, profile, dispatch]);

  const suggestion = getSuggestion(
    profile.goal,
    performance.net,
    performance.tolerance
  );

  const netColor = getNetColor(profile.goal, performance.net);

  return {
    ...performance,
    suggestion,
    streak: profile.streak,
    netColor
  };
};

export default usePerformance;