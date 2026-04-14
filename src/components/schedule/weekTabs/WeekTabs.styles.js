import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TabsWrapper = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  background: "#fff",
  padding: "10px",
  borderRadius: "14px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
}));

export const TabItem = styled(Box)(({ active }) => ({
  padding: "10px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: 600,
  transition: "0.3s",
  background: active ? "#3f7afc" : "#f3f5fa",
  color: active ? "#fff" : "#7C8798",

  "&:hover": {
    background: active ? "#3f7afc" : "#e4e7f2"
  }
}));