import React from "react";
import { getWeekData, formatDateKey } from "../../utils/dateUtils";
import { TabsWrapper, TabItem } from "./WeekTabs.styles";

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

  const validSelected =
    days.find((d) => d.value === selectedDay?.value) || days[0];

  return (
    <TabsWrapper>
      {days.map((d) => {
        const isActive = d.value === validSelected.value;

        return (
          <TabItem
            key={d.value}
            active={isActive}
            onClick={() => setSelectedDay(d)}
          >
            {d.label} ({d.date.getDate()})
          </TabItem>
        );
      })}
    </TabsWrapper>
  );
};

export default WeekTabs;