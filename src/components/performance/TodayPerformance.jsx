import React from "react";
import { Box, Typography } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const TodayPerformance = ({
  gained,
  burned,
  net,
  status,
  suggestion,
  streak,
  netColor
}) => {

  const statusColor = status === "ON TRACK" ? "#22c55e" : "#ef4444";

  return (
    <Box
      sx={{
        mt: 3,
        p: 3,
        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
      }}
    >
      {/* HEADER */}
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <WhatshotIcon sx={{ color: "#ff6b6b" }} />
        <Typography fontSize={22} fontWeight={600}>
          Today Performance
        </Typography>
      </Box>

      {/* STATS */}
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box>
          <Typography color="text.secondary">Calories Gained</Typography>
          <Typography fontSize={20} fontWeight={600}>
            {gained} kcal
          </Typography>
        </Box>

        <Box>
          <Typography color="text.secondary">Calories Burned</Typography>
          <Typography fontSize={20} fontWeight={600}>
            {burned} kcal
          </Typography>
        </Box>
      </Box>

      {/* NET */}
      <Box mb={2}>
        <Typography color="text.secondary">Net Calories</Typography>
        <Typography
          fontSize={22}
          fontWeight={700}
          color={netColor}
        >
          {net > 0 ? "+" : ""}
          {net} kcal
        </Typography>
      </Box>

      {/* STATUS */}
      <Box
        sx={{
          mt: 2,
          px: 2,
          py: 1,
          borderRadius: "20px",
          display: "inline-block",
          fontWeight: 600,
          color: "#fff",
          background: statusColor
        }}
      >
        {status}
      </Box>

      {/* SUGGESTION */}
      {suggestion && (
        <Typography mt={2} color="text.secondary">
          {suggestion}
        </Typography>
      )}

      {/* STREAK */}
      <Box mt={2} display="flex" alignItems="center" gap={1}>
        <WhatshotIcon sx={{ color: "#ff6b6b" }} />
        <Typography fontWeight={600}>
          {streak} day streak
        </Typography>
      </Box>
    </Box>
  );
};

export default TodayPerformance;