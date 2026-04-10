import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledMenuItem = styled(Box)(({ active }) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 14px",
  borderRadius: "10px",
  marginBottom: "8px",
  cursor: "pointer",
  background: active ? "#eef3ff" : "transparent",

  "&:hover": {
    background: "#f3f5fa",
  },
}));

export const StyledMenuIcon = styled(Box)(({ active }) => ({
  marginRight: "12px",
  color: active ? "#3f7afc" : "#7c8798",
  display: "flex",
  alignItems: "center",
}));

export const StyledMenuText = styled(Box)(({ active }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: active ? "#3f7afc" : "#7c8798",
}));