import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const SidebarContainer = styled(Box)(() => ({
  width: "260px",
  minWidth: "240px",
  flexShrink: "0",
  height: "100vh",
  background: "#ffffff",
  borderRight: "1px solid #f1f5f9",
  padding: "20px",
}));
