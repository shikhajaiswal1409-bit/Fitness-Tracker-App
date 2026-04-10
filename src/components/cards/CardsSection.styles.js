import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

export const SectionContainer = styled(Box)(() => ({
  marginBottom: "30px"
}));

export const SectionHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px"
}));

export const SectionTitle = styled(Box)(() => ({
  fontSize: "18px",
  fontWeight: 700
}));

export const NavButtons = styled(Box)(() => ({
  display: "flex",
  gap: "8px"
}));

export const ArrowButton = styled(IconButton)(() => ({
  background: "#f3f5fa",
  borderRadius: "8px"
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