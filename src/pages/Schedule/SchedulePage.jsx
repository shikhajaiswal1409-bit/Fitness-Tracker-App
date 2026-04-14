import React, { useState } from "react";

import ScheduleHeader from "../../components/schedule/scheduleHeader/ScheduleHeader";
import WeekTabs from "../../components/schedule/weekTabs/WeekTabs";
import DaySchedule from "../../components/schedule/daySchedule/DaySchedule";
import AddActivityModal from "../../components/schedule/modal/AddActivityModal";

import { formatDateKey } from "../../components/utils/dateUtils";
import { PageContainer } from "./Schedule.styles";

const SchedulePage = () => {

  const today = new Date();

  const [selectedDay, setSelectedDay] = useState({
    label: today.toLocaleDateString("en-US", { weekday: "short" }),
    date: today,
    value: formatDateKey(today),
  });

  const [open, setOpen] = useState(false);

  return (
    <PageContainer>

      <ScheduleHeader />

      <WeekTabs
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />

      <DaySchedule
        day={selectedDay}
        handleOpen={() => setOpen(true)}
      />

      <AddActivityModal
        open={open}
        handleClose={() => setOpen(false)}
        day={selectedDay}
      />

    </PageContainer>
  );
};

export default SchedulePage;