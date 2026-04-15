
import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import {
  PageContainer,
  Header,
  Title,
  SubText,
  StatsRow,
  StatCard,
  StatTitle,
  StatValue,
  GlassCard,
  InsightBox
} from "./StatisticsChart.styles";

import { generateWeeklyChartData } from "../utils/chartUtils";

const StatisticsChart = () => {
  const schedule = useSelector((state) => state.schedule);

  const data = generateWeeklyChartData(schedule);

  // totals
  const totals = data.reduce(
    (acc, d) => {
      acc.exercise += d.exercise;
      acc.meals += d.meals;
      acc.sleep += d.sleep;
      return acc;
    },
    { exercise: 0, meals: 0, sleep: 0 }
  );

  // 🔥 INSANE AI INSIGHT (Jarvis tone)
  const insight = `
SYSTEM ANALYSIS:

→ Exercise Frequency: ${totals.exercise}
→ Nutrition Logs: ${totals.meals}
→ Sleep Duration: ${totals.sleep} hrs

${
  totals.exercise > 20
    ? "STATUS: Peak performance detected. Maintain current trajectory."
    : totals.exercise > 10
    ? "STATUS: Stable performance. Slight increase recommended."
    : "STATUS: Activity below optimal threshold. Immediate action advised."
}
`;

  return (
    <PageContainer>

      {/* HEADER */}
      <Header>
        <Title>Performance Analytics</Title>
        <SubText>AI-powered weekly insights</SubText>
      </Header>

      {/* KPI CARDS */}
      <StatsRow>
        <StatCard gradient="linear-gradient(135deg,#3A8DFF,#00C6FF)">
          <StatTitle>Exercise</StatTitle>
          <StatValue>{totals.exercise}</StatValue>
        </StatCard>

        <StatCard gradient="linear-gradient(135deg,#FF5F6D,#FFC371)">
          <StatTitle>Meals</StatTitle>
          <StatValue>{totals.meals}</StatValue>
        </StatCard>

        <StatCard gradient="linear-gradient(135deg,#22C55E,#4ADE80)">
          <StatTitle>Sleep</StatTitle>
          <StatValue>{totals.sleep}</StatValue>
        </StatCard>
      </StatsRow>

      {/* CHART */}
      <GlassCard>

        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <XAxis dataKey="day" />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                background: "#111827",
                color: "#fff",
              }}
            />

            <CartesianGrid stroke="#e5e7eb" />

            <Line
              type="monotone"
              dataKey="exercise"
              stroke="#3A8DFF"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey="meals"
              stroke="#FF5F6D"
              strokeWidth={4}
              dot={{ r: 5 }}
            />

            <Line
              type="monotone"
              dataKey="sleep"
              stroke="#22C55E"
              strokeWidth={4}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* 🤖 AI INSIGHT */}
        <InsightBox>
          {insight}
        </InsightBox>

      </GlassCard>

    </PageContainer>
  );
};

export default StatisticsChart;