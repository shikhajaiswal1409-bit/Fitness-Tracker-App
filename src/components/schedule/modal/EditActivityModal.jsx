import React, { useState, useEffect } from "react";
import { Dialog, Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateActivity } from "../../../features/schedule/scheduleSlice";
import { formatDateKey } from "../../utils/dateUtils";

const EditActivityModal = ({ open, handleClose, activity, index, day }) => {

  const dispatch = useDispatch();
  const [data, setData] = useState({});

  // ✅ FIX: sync modal data
  useEffect(() => {
    setData(activity || {});
  }, [activity]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {

    dispatch(updateActivity({
      dateKey: formatDateKey(day.date),
      index,
      updatedActivity: {
        ...activity,  // ✅ preserve type
        ...data,
        calories: Number(data.calories || activity.calories || 0),
        hours: Number(data.hours || activity.hours || 0)
      }
    }));

    handleClose();
  };

  if (!activity) return null;

  return (
    <Dialog open={open} onClose={handleClose}>
      <Box p={3} display="flex" flexDirection="column" gap={2}>

        <TextField
          label="Name"
          name="title"
          value={data.title || ""}
          onChange={handleChange}
        />

        <TextField
          label="Duration"
          name="time"
          value={data.time || ""}
          onChange={handleChange}
        />

        <TextField
          label="Calories"
          name="calories"
          value={data.calories || ""}
          onChange={handleChange}
        />

        <Button variant="contained" onClick={handleSave}>
          Save Changes
        </Button>

      </Box>
    </Dialog>
  );
};

export default EditActivityModal;