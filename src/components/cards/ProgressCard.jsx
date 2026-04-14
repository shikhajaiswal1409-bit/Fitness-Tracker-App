import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import {
  IconWrapper,
  CardTop,
  ProgressWrapper,
  ProgressText,
  CardItem
} from "./ProgressCard.styles";
import { commonColors } from "../../styles/colors";

const ProgressCard = ({ title, icon, progress, value, unit, target, type }) => {

  return (
    <CardItem type={type}>

      <CardTop>

        <Box>
          <Typography fontSize={18} opacity={0.9}>
  {title}
</Typography>

<Typography fontSize={34} fontWeight={700}>
  {value} {unit}
</Typography>
        </Box>

        <IconWrapper>
          {icon}
        </IconWrapper>

      </CardTop>

      <ProgressWrapper>

        <CircularProgress
          variant="determinate"
          value={Number(progress) || 0}  
          size={110}
          thickness={5}
          sx={{
            color: commonColors.white,
            "& .MuiCircularProgress-circle": {
              strokeLinecap: "round"
            }
          }}
        />

        <ProgressText>
          {value}/{target}
        </ProgressText>

      </ProgressWrapper>

    </CardItem>
  );
};

export default ProgressCard;