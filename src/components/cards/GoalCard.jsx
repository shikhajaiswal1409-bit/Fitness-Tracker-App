import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { GoalContainer, GoalContent, IconWrapper, ProgressText, StatusBadge } from './GoalCard.styles'
import { commonColors, goalGradients } from '../../styles/colors'

const GoalCard = ({title, progress, type, icon, status}) => {
  return (
    <>
   <GoalContainer>
   <IconWrapper type={type}>{icon}</IconWrapper>
   <GoalContent>
   <Typography fontSize={"30px"} fontWeight={600}>{title}</Typography>
   <LinearProgress  
   variant='determinate'
   value={progress}
   sx={{
    marginTop: "10px",
    height:"10px",
    borderRadius: "16px",
     backgroundColor: "rgba(255,255,255,0.3)",
            "& .MuiLinearProgress-bar": {
              background: goalGradients[type] || commonColors.cardBackground,
            }

   }}

   />
   </GoalContent>

   <ProgressText>
    {progress}%
   </ProgressText>
</GoalContainer>

   
        <StatusBadge status={status}>
          {status}
        </StatusBadge>
        </>



  )
}

export default GoalCard
