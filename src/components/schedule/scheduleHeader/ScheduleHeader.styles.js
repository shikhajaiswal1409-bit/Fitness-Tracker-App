import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeaderContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px"
}));

export const Title = styled(Box)(() => ({
  fontSize: "24px",
  fontWeight: 600,
  color: "#1F2937"
}));

export const WeekText = styled(Box)(() => ({
  fontSize: "14px",
  color: "#7C8798"
}));