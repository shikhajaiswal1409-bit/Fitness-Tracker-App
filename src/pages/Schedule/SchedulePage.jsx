

import React, { useState } from "react";
import { Box } from "@mui/material";

import ScheduleHeader from "../../components/schedule/scheduleHeader/ScheduleHeader";
import WeekTabs from "../../components/schedule/weekTabs/WeekTabs";
import DaySchedule from "../../components/schedule/daySchedule/DaySchedule";
import AddActivityModal from "../../components/schedule/modal/AddActivityModal";
import { formatDateKey } from "../../components/utils/dateUtils";

const SchedulePage = () => {

  const today = new Date();

  const [selectedDay, setSelectedDay] = useState({
    label: today.toLocaleDateString("en-US", { weekday: "short" }),
    date: today,
    value: formatDateKey(today),
  });

  const [open, setOpen] = useState(false);

  return (
    <Box p={3}>

      {/*  HEADER */}
      <Box mb={3}>
        <ScheduleHeader />
      </Box>

      {/*  WEEK TABS */}
      <Box mb={3}>
        <WeekTabs
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </Box>

      {/*  DAY SECTION */}
      <DaySchedule
        day={selectedDay}
        handleOpen={() => setOpen(true)}
      />

      {/*  MODAL */}
      <AddActivityModal
        open={open}
        handleClose={() => setOpen(false)}
        day={selectedDay}
      />

    </Box>
  );
};

export default SchedulePage;