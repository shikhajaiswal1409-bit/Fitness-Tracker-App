import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getWeekData } from "../../utils/dateUtils";

const ScheduleHeader = () => {

  const startDate = useSelector((state) => state.profile.startDate);

  if (!startDate) return null;

  const { weekNumber, range } = getWeekData(startDate);

  return (
    <Typography variant="h5" mb={2}>
      Week {weekNumber} ({range})
    </Typography>
  );
};

export default ScheduleHeader;