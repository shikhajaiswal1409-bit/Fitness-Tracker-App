import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ActivitySelector = ({ setType }) => {

  return (
    <Box textAlign="center">

      <Typography variant="h6" mb={3}>
        Select Activity Type
      </Typography>

      <Box display="flex" gap={2} justifyContent="center">

        <Button
        variant="contained"
        onClick={()=>setType("exercise")}
        >
        Exercise
        </Button>

        <Button
        variant="contained"
        onClick={()=>setType("meal")}
        >
        Meal
        </Button>

        <Button
        variant="contained"
        onClick={()=>setType("sleep")}
        >
        Sleep
        </Button>

      </Box>

    </Box>
  );
};

export default ActivitySelector;