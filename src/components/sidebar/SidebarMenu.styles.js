import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledMenuItem = styled(Box)(({ active }) => ({
  display: "flex",
  alignItems: "center",
  padding: "12px 16px",
  borderRadius: "12px",
  marginBottom: "8px",
  cursor: "pointer",

  background: active ? "#EEF2FF" : "transparent",

  "&:hover": {
    background: "#F9FAFB",
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