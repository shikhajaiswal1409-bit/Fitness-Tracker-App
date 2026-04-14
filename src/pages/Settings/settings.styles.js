import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

/* PAGE */
export const SettingsContainer = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  background: "linear-gradient(135deg, #eef2ff, #f8fbff)",
}));

/* CARD */
export const ProfileCard = styled(Box)(() => ({
  width: "600px",
  background: "rgba(255,255,255,0.75)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  padding: "40px",
  boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
  border: "1px solid rgba(255,255,255,0.5)",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "24px",
    background:
      "linear-gradient(120deg, rgba(63,122,252,0.15), transparent)",
    pointerEvents: "none",
  },
}));

/* TITLE */
export const Title = styled(Box)(() => ({
  fontSize: "32px",
  fontWeight: 800,
  marginBottom: "30px",
  textAlign: "center",
  background: "linear-gradient(90deg,#3f7afc,#00c6ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

/* AVATAR */
export const AvatarWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "30px",
}));

export const AvatarRing = styled(Box)(() => ({
  padding: "4px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,#3f7afc,#00c6ff)",
  marginBottom: "10px",
}));

/* FORM */
export const FormContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
}));

export const FormRow = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
}));

/* BUTTON WRAPPER */
export const SaveButtonWrapper = styled(Box)(() => ({
  marginTop: "30px",
  display: "flex",
  justifyContent: "flex-end",
}));

/* BUTTON */
export const SaveButton = styled(Button)(() => ({
  background: "linear-gradient(135deg,#3f7afc,#00c6ff)",
  padding: "10px 24px",
  borderRadius: "12px",
  color: "#fff",
  fontWeight: 600,
  textTransform: "none",

  "&:hover": {
    background: "linear-gradient(135deg,#356df0,#00b4ff)",
    transform: "translateY(-2px)",
    boxShadow: "0 12px 30px rgba(63,122,252,0.4)",
  },
}));