

import React from "react";
import { Tabs, Tab } from "@mui/material";
import { getWeekData, formatDateKey } from "../../utils/dateUtils";

const WeekTabs = ({ selectedDay, setSelectedDay }) => {

  const today = new Date();
  const { weekStart } = getWeekData(today);

  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);

    return {
      label: d.toLocaleDateString("en-US", { weekday: "short" }),
      date: d,
      value: formatDateKey(d),
    };
  });

  // ✅ ensure selected day always valid
  const validSelected =
    days.find((d) => d.value === selectedDay?.value) || days[0];

  return (
    <Tabs
      value={validSelected.value}  // ✅ SAFE VALUE
      onChange={(e, newValue) => {
        const selected = days.find((d) => d.value === newValue);
        setSelectedDay(selected);
      }}
    >
      {days.map((d) => (
        <Tab
          key={d.value}
          label={`${d.label} (${d.date.getDate()})`}
          value={d.value}
        />
      ))}
    </Tabs>
  );
};

export default WeekTabs;