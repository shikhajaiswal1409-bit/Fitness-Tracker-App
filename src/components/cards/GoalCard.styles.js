import styled from "@emotion/styled";
import {Box} from "@mui/material"
import { commonColors, goalGradients } from "../../styles/colors";

export const GoalContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  padding: "24px",
  borderRadius: "20px",
  background: "#fff",
  marginBottom: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
}));

export const IconWrapper = styled(Box)(({type})=>({
    width: "60px",
  height: "60px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "18px",
  background: goalGradients[type] || commonColors.cardBackground,

}))

export const GoalContent = styled(Box)(()=>({
  flex: 1

}))

export const ProgressText = styled(Box)(()=>({
    fontSize: "30px",
    fontWeight: "600",
    marginLeft: "12px"
}))

export const StatusBadge = styled(Box)(({ status }) => ({
  marginTop: "10px",
  padding: "6px 14px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: 600,
  color: "#fff",
  width: "fit-content",

  background:
    status === "ON TRACK"
      ? "#22c55e"
      : "#ef4444",
}));

