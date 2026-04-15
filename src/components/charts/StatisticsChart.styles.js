
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

/* PAGE */
export const PageContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
}));

/* HEADER */
export const Header = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Title = styled(Box)(() => ({
  fontSize: "30px",
  fontWeight: 800,
  background: "linear-gradient(90deg,#3f7afc,#00c6ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

export const SubText = styled(Box)(() => ({
  fontSize: "24px",
  color: "#7C8798",
}));

/* KPI ROW */
export const StatsRow = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
}));

export const StatCard = styled(Box)(({ gradient }) => ({
  flex: 1,
  minWidth: "180px",
  padding: "20px",
  borderRadius: "18px",
  color: "#fff",
  background: gradient,
  boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
  position: "relative",
  overflow: "hidden",
  transition: "0.3s",

  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    width: "120px",
    height: "120px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    top: "-30px",
    right: "-30px",
  },
}));

export const StatTitle = styled(Box)(() => ({
  fontSize: "13px",
  opacity: 0.9,
}));

export const StatValue = styled(Box)(() => ({
  fontSize: "30px",
  fontWeight: 800,
}));

/* GLASS CHART */
export const GlassCard = styled(Box)(() => ({
  background: "rgba(255,255,255,0.6)",
  backdropFilter: "blur(18px)",
  borderRadius: "22px",
  padding: "26px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
  border: "1px solid rgba(255,255,255,0.4)",
}));

/* AI PANEL */
export const InsightBox = styled(Box)(() => ({
  marginTop: "18px",
  padding: "18px",
  borderRadius: "14px",
  background: "linear-gradient(135deg,#0f172a,#1e293b)",
  color: "#e2e8f0",
  fontSize: "14px",
  lineHeight: 1.6,
  position: "relative",

  "&::before": {
    content: '"🤖"',
    position: "absolute",
    top: "-12px",
    left: "12px",
    background: "#0f172a",
    padding: "4px 8px",
    borderRadius: "10px",
    fontSize: "14px",
  },
}));