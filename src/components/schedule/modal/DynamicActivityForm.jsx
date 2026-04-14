import React, { useState } from "react";
import { Box, TextField, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";

import { addActivity } from "../../../features/schedule/scheduleSlice";
import { formatDateKey } from "../../utils/dateUtils";
import { isValidTime, convertTo24Hour } from "../../utils/timeUtils";

const DynamicActivityForm = ({ type, day, handleClose }) => {

  const dispatch = useDispatch();

  const [forms, setForms] = useState([
    { name: "", time: "", calories: "", hours: "" }
  ]);

  const [errors, setErrors] = useState([{}]);

  const handleChange = (index, field, value) => {
    const updated = [...forms];
    updated[index][field] = value;
    setForms(updated);
  };

  const addForm = () => {
    setForms([...forms, { name: "", time: "", calories: "", hours: "" }]);
    setErrors([...errors, {}]);
  };

  const validate = () => {
    let valid = true;

    const newErrors = forms.map((form) => {
      const err = {};

      if (type !== "sleep") {
        if (!form.name) err.name = "Required";
        if (!isValidTime(form.time)) err.time = "Invalid format";
        if (!form.calories || form.calories <= 0) err.calories = "Invalid";
      }

      if (type === "sleep") {
        if (!form.hours || form.hours <= 0) err.hours = "Invalid";
      }

      if (Object.keys(err).length) valid = false;

      return err;
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    forms.forEach((form) => {
      let activity = { type };

      if (type !== "sleep") {
        activity = {
          type,
          title: form.name,
          time: form.time,
          time24: convertTo24Hour(form.time),
          calories: Number(form.calories)
        };
      }

      if (type === "sleep") {
        activity = {
          type,
          hours: Number(form.hours)
        };
      }

      dispatch(addActivity({
        dateKey: formatDateKey(day.date),
        activity
      }));
    });

    handleClose();
  };

  return (
    <Box>

      <Typography fontSize={22} fontWeight={600} mb={2}>
        Add {type}
      </Typography>

      {forms.map((form, index) => (
        <Box
          key={index}
          sx={{
            mb: 3,
            p: 2,
            borderRadius: "12px",
            background: "#f9fafc",
            border: "1px solid #eef1f6"
          }}
        >

          {type !== "sleep" && (
            <>
              <TextField
                fullWidth
                label="Name"
                value={form.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                error={!!errors[index]?.name}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Time (2PM)"
                value={form.time}
                onChange={(e) => handleChange(index, "time", e.target.value)}
                error={!!errors[index]?.time}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Calories"
                type="number"
                value={form.calories}
                onChange={(e) => handleChange(index, "calories", e.target.value)}
                error={!!errors[index]?.calories}
              />
            </>
          )}

          {type === "sleep" && (
            <TextField
              fullWidth
              label="Sleep Hours"
              type="number"
              value={form.hours}
              onChange={(e) => handleChange(index, "hours", e.target.value)}
              error={!!errors[index]?.hours}
            />
          )}

        </Box>
      ))}

      {/* ADD MORE */}
      <IconButton onClick={addForm}>
        <AddIcon />
      </IconButton>

      {/* SUBMIT */}
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmit}
        sx={{
          mt: 2,
          padding: "12px",
          borderRadius: "10px",
          fontWeight: 600,
          fontSize: "16px"
        }}
      >
        Add {type}
      </Button>

    </Box>
  );
};

export default DynamicActivityForm;