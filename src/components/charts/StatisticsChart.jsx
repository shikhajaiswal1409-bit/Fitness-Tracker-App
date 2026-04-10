

import React from "react";
import { useSelector } from "react-redux";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { ChartContainer, ChartTitle } from "./StatisticsChart.styles";
import { generateWeeklyChartData } from "../utils/chartUtils";

const StatisticsChart = () => {

  const schedule = useSelector((state) => state.schedule);

  const data = generateWeeklyChartData(schedule);

  return (
    <ChartContainer>
      <ChartTitle>Weekly Progress</ChartTitle>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />

          <Line
            type="monotone"
            dataKey="exercise"
            stroke="#3A8DFF"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="meals"
            stroke="#FF5F6D"
            strokeWidth={3}
          />

          <Line
            type="monotone"
            dataKey="sleep"
            stroke="#22C55E"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default StatisticsChart;
