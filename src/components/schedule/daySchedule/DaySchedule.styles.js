import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(() => ({
  background: "rgba(255,255,255,0.7)",
  backdropFilter: "blur(12px)",
  borderRadius: "24px",
  padding: "30px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.08)"
}));

export const Header = styled(Box)(() => ({
  fontSize: "24px",
  fontWeight: 700,
  marginBottom: "25px"
}));

export const Timeline = styled(Box)(() => ({
  position: "relative",
  marginTop: "20px",
  paddingLeft: "30px",

  "&::before": {
    content: '""',
    position: "absolute",
    left: "10px",
    top: 0,
    bottom: 0,
    width: "2px",
    background: "#e5e7eb"
  }
}));

export const ActivityCard = styled(Box)(({ color }) => ({
  position: "relative",
  marginBottom: "20px",
  padding: "18px 20px",
  borderRadius: "16px",
  background: "#ffffff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "&::before": {
    content: '""',
    position: "absolute",
    left: "-22px",
    top: "20px",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: color
  }
}));

export const ActivityInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "6px"
}));

export const ActivityTitle = styled(Box)(() => ({
  fontSize: "16px",
  fontWeight: 600
}));

export const ActivityMeta = styled(Box)(() => ({
  fontSize: "13px",
  color: "#6b7280"
}));

export const Actions = styled(Box)(() => ({
  display: "flex",
  gap: "10px"
}));

export const AddButton = styled(Box)(() => ({
  marginTop: "25px",
  display: "inline-block",
  padding: "12px 22px",
  background: "#3f7afc",
  color: "#fff",
  borderRadius: "12px",
  fontWeight: 600,
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(63,122,252,0.3)",

  "&:hover": {
    background: "#2f63d6"
  }
}));