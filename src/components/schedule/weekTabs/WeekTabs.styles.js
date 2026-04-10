import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const TabsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  background: "#fff",
  padding: "10px",
  borderRadius: "10px",
  border: "1px solid #e6e8f0",
  marginBottom: "20px"
}));

export const TabItem = styled(Box)(({ active }) => ({
  padding: "8px 16px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 500,
  color: active ? "#fff" : "#7C8798",
  background: active ? "#3f7afc" : "transparent",

  "&:hover": {
    background: active ? "#3f7afc" : "#f3f5fa"
  }
}));