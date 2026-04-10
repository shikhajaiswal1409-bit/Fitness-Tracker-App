import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SidebarContainer = styled(Box)(() => ({
  width: "260px",
  height: "100vh",
  background: "#fff",
  borderRight: "1px solid #e6e8f0",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

