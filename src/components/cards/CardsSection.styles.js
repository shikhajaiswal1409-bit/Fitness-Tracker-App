import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const SectionContainer = styled(Box)(() => ({
  marginBottom: "40px"
}));

export const SectionHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px"
}));

export const SectionTitle = styled(Box)(() => ({
  fontSize: "22px",
  fontWeight: 700,
  color: "#111827"
}));

export const NavButtons = styled(Box)(() => ({
  display: "flex",
  gap: "8px"
}));

export const ArrowButton = styled(IconButton)(() => ({
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",

  "&:hover": {
    background: "#f9fafb",
  }
}));

export const CardsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "20px",
  overflowX: "auto",
  scrollBehavior: "smooth",

  "&::-webkit-scrollbar": {
    display: "none"
  }
}));