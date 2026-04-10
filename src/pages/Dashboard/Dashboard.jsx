import { Box } from "@mui/material";

import CardsSection from "../../components/cards/CardsSection";
import TodayPerformanceCard from "../../components/performance/TodayPerformance";

import usePerformance from "../../components/performance/usePerformance";

const Dashboard = () => {

 const {
  gained,
  burned,
  net,
  status,
  suggestion,
  streak,
  netColor
} = usePerformance();

  return (
    <>
          <CardsSection />

    <Box>

      <TodayPerformanceCard
  gained={gained}
  burned={burned}
  net={net}
  status={status}
  suggestion={suggestion}
  streak={streak}
  netColor={netColor}
/>


    </Box>
    </>
  );
};

export default Dashboard;