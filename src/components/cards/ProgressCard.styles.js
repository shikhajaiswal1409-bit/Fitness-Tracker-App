import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { cardGradients, commonColors } from "../../styles/colors";

export const CardItem = styled(Box)(({ type }) => ({
  background: cardGradients[type] || commonColors.cardBackground,
  borderRadius: "16px",
  padding: "20px",
  width: "320px",
  minWidth: "320px",
  color: commonColors.white,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
}));

export const CardTop = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "14px"
}));

export const IconWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff"
}));

export const ProgressWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const ProgressText = styled(Box)(() => ({
  position: "absolute",
  fontSize: "18px",
  fontWeight: 600,
  color: "#fff"
}));