import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const Card = styled(Box)(({ color }) => ({
  background: color,
  color: "#fff",
  padding: "8px 14px",
  borderRadius: "10px",
  fontSize: "13px",
  fontWeight: 500
}));

const ActivityCard = ({ title, color }) => {
  return <Card color={color}>{title}</Card>;
};

export default ActivityCard;