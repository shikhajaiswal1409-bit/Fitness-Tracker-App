import styled from "@emotion/styled";
import {Box} from "@mui/material"
import { commonColors, goalGradients } from "../../styles/colors";

export const GoalContainer= styled(Box)(()=>({
display: "flex",
  alignItems: "center",
  padding: "20px",
  borderRadius: "16px",
  color: "#808080", 
  marginBottom: "20px",
boxShadow: "0 15px 40px rgba(0,0,0,0.12)"
}))

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
  marginTop: "80px",
  padding: "4px 10px",
  // width: "100px",
  display: "flex",
  justifyContent: "center",
  borderRadius: "20px",
  fontSize: "22px",
  fontWeight: 600,
  color: "#fff",
  background:
    status === "ON TRACK"
      ? "#6aac82"   // green
      : "#da8686",  // red
}));


