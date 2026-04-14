import { styled } from "@mui/material/styles";
import { Box} from "@mui/material";

export const HeaderContainer = styled(Box)(() => ({
  height: "70px",
  background: "#ffffff",
  borderBottom: "1px solid #e6e8f0",
  padding: "0 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}));

export const LeftSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "30px"
}));

export const Title = styled(Box)(() => ({
  fontSize: "24px",
  fontWeight: 500,
  letterSpacing: "1px",
  fontFamily: "sans-serif"
}));


export const RightSection = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px"
}));