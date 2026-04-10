import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ChartContainer = styled(Box)(() => ({
  background: "#ffffff",
  borderRadius: "16px",
  padding: "20px",
  marginTop: "24px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
}));

export const ChartTitle = styled(Box)(() => ({
  fontSize: "30px",
  fontWeight: 600,
  marginBottom: "76px"
}));