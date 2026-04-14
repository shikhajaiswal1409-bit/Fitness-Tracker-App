import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { cardGradients} from "../../styles/colors";

export const CardItem = styled(Box)(({ type }) => ({
  background: cardGradients[type],
  borderRadius: "20px",
  padding: "24px",
  width: "320px",
  minWidth: "320px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  transition: "0.3s",

  "&:hover": {
    transform: "translateY(-6px)",
  }
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
  fontSize: "16px",
  fontWeight: 700,
  color: "#fff"
}));