import React from "react";
import { Box, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BedtimeIcon from "@mui/icons-material/Bedtime";

const OptionCard = ({ icon, label, onClick, gradient }) => (
  <Box
    onClick={onClick}
    sx={{
      flex: 1,
      cursor: "pointer",
      padding: "24px",
      borderRadius: "16px",
      textAlign: "center",
      color: "#fff",
      background: gradient,
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)"
      }
    }}
  >
    <Box mb={1}>{icon}</Box>
    <Typography fontWeight={600}>{label}</Typography>
  </Box>
);

const ActivitySelector = ({ setType }) => {
  return (
    <Box textAlign="center">

      <Typography fontSize={22} fontWeight={600} mb={3}>
        Select Activity
      </Typography>

      <Box display="flex" gap={2}>

        <OptionCard
          label="Exercise"
          icon={<FitnessCenterIcon />}
          gradient="linear-gradient(135deg,#3A8DFF,#00C6FF)"
          onClick={() => setType("exercise")}
        />

        <OptionCard
          label="Meal"
          icon={<RestaurantIcon />}
          gradient="linear-gradient(135deg,#FF5F6D,#FFC371)"
          onClick={() => setType("meal")}
        />

        <OptionCard
          label="Sleep"
          icon={<BedtimeIcon />}
          gradient="linear-gradient(135deg,#34D399,#10B981)"
          onClick={() => setType("sleep")}
        />

      </Box>
    </Box>
  );
};

export default ActivitySelector;