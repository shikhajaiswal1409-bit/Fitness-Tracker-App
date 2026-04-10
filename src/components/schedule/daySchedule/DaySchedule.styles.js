import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const ScheduleContainer = styled(Box)(() => ({
  background: "#ffffff",
  borderRadius: "12px",
  border: "1px solid #e6e8f0",
  padding: "20px"
}));

export const DayRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: "10px",
  borderBottom: "1px solid #f0f2f6"
}));

export const DayName = styled(Box)(() => ({
  fontWeight: 600,
  color: "#1F2937"
}));

export const ActivityGroup = styled(Box)(() => ({
  display: "flex",
  gap: "10px"
}));

export const AddButton = styled(Button)(() => ({
  marginTop: "15px",
  background: "#3f7afc",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: 600,

  "&:hover": {
    background: "#2f63d6"
  }
}));