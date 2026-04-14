import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const CardContainer = styled(Box)(() => ({
  marginTop: "24px",
  padding: "28px",
  borderRadius: "24px",
  background: "linear-gradient(135deg, #ffffff, #f9fafb)",
  boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  position: "relative",
  overflow: "hidden",
  transition: "0.3s",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.12)"
  }
}));

export const TopAccent = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "5px",
  background: "linear-gradient(90deg,#4f46e5,#22c55e,#f97316)",
}));

export const HeaderRow = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

export const StatsRow = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

export const StatBox = styled(Box)(() => ({
  flex: 1,
  padding: "18px",
  borderRadius: "16px",
  background: "#ffffff",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
}));

export const NetBox = styled(Box)(() => ({
  padding: "18px",
  borderRadius: "16px",
  background: "linear-gradient(135deg,#eef2ff,#f0fdf4)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const StatusBadge = styled(Box)(({ status }) => ({
  padding: "6px 18px",
  borderRadius: "999px",
  fontSize: "13px",
  fontWeight: 700,
  color: "#fff",

  background:
    status === "ON TRACK"
      ? "linear-gradient(135deg,#22c55e,#16a34a)"
      : "linear-gradient(135deg,#ef4444,#dc2626)",
}));

export const ProgressBar = styled(Box)(({ progress }) => ({
  width: "100%",
  height: "10px",
  borderRadius: "10px",
  background: "#e5e7eb",
  overflow: "hidden",

  "&::after": {
    content: '""',
    display: "block",
    height: "100%",
    width: `${progress}%`,
    background: "linear-gradient(90deg,#4f46e5,#22c55e)",
    transition: "0.4s ease",
  }
}));

// 🔥 AI Assistant UI
export const AssistantContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
}));

export const AvatarCircle = styled(Box)(() => ({
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#4f46e5,#22c55e)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  fontWeight: 700,
}));

export const ChatBubble = styled(Box)(() => ({
  padding: "14px 16px",
  borderRadius: "16px",
  background: "#f3f4f6",
  maxWidth: "80%",
  position: "relative",
  fontSize: "14px",
  lineHeight: 1.6,
  color: "#111827",
  boxShadow: "0 4px 14px rgba(0,0,0,0.05)",

  "&::after": {
    content: '""',
    position: "absolute",
    left: "-6px",
    top: "12px",
    width: "12px",
    height: "12px",
    background: "#f3f4f6",
    transform: "rotate(45deg)",
  }
}));

export const TypingDots = styled(Box)(() => ({
  display: "flex",
  gap: "4px",
  marginTop: "6px",

  "& span": {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#9ca3af",
    animation: "bounce 1.4s infinite ease-in-out",
  },

  "& span:nth-of-type(2)": {
    animationDelay: "0.2s",
  },

  "& span:nth-of-type(3)": {
    animationDelay: "0.4s",
  },

  "@keyframes bounce": {
    "0%, 80%, 100%": { transform: "scale(0)" },
    "40%": { transform: "scale(1)" },
  },
}));

export const ActionButton = styled(Box)(() => ({
  marginTop: "6px",
  display: "inline-block",
  padding: "6px 14px",
  borderRadius: "20px",
  background: "#4f46e5",
  color: "#fff",
  fontSize: "13px",
  fontWeight: 600,
  cursor: "pointer",

  "&:hover": {
    background: "#4338ca"
  }
}));