import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const PageContainer = styled(Box)(() => ({
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}));