import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import GoalCard from "../../components/cards/GoalCard";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

import { getWeeklyStats } from "../../components/utils/goalUtils";

const GoalsPage = () => {

  const schedule = useSelector((state) => state.schedule);
  const userGoal = useSelector((state) => state.profile.goal);
  const startDate = useSelector((state) => state.profile.startDate);

  const { totalIntake, totalBurned } =
    getWeeklyStats(schedule, startDate);

  let progress = 0;
  let status = "OFF TRACK";

  //  GOAL LOGIC

  if (userGoal === "muscles") {
    progress = (totalIntake / (totalBurned || 1)) * 50;
    status = totalIntake > totalBurned ? "ON TRACK" : "OFF TRACK";
  }

  if (userGoal === "weight") {
    progress = (totalBurned / (totalIntake || 1)) * 50;
    status = totalBurned > totalIntake ? "ON TRACK" : "OFF TRACK";
  }

  if (userGoal === "balance") {
    const diff = Math.abs(totalIntake - totalBurned);
    progress = 100 - diff;
    status = diff < 200 ? "ON TRACK" : "OFF TRACK";
  }

  progress = Math.min(100, Math.round(progress));

  //  GOAL MAP

  const goalsMap = {
    muscles: {
      title: "Build Muscles",
      type: "muscles",
      icon: <FitnessCenterIcon sx={{ fontSize: 32, color: "#fff" }} />
    },
    weight: {
      title: "Lose Weight",
      type: "weight",
      icon: <MonitorWeightIcon sx={{ fontSize: 32, color: "#fff" }} />
    },
    balance: {
      title: "Maintain Balance",
      type: "endurance",
      icon: <DirectionsRunIcon sx={{ fontSize: 32, color: "#fff" }} />
    }
  };

  const goal = goalsMap[userGoal];

  if (!goal) return <Typography>No goal selected</Typography>;

  return (
    <Box>
      <Typography fontSize={28} fontWeight={500} mb={3}>
        MY GOAL
      </Typography>

      <GoalCard
        title={goal.title}
        progress={progress}
        icon={goal.icon}
        type={goal.type}
        status={status}
      />
    </Box>
  );
};

export default GoalsPage;