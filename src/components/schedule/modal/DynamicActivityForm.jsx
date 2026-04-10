
import React, { useState } from "react";
import { Box, TextField, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";

import { addActivity } from "../../../features/schedule/scheduleSlice";
import { formatDateKey } from "../../utils/dateUtils";
import {
  isValidTime,
  convertTo24Hour
} from "../../utils/timeUtils";

const DynamicActivityForm = ({ type, day, handleClose }) => {
  const dispatch = useDispatch();

  const [forms, setForms] = useState([
    { name: "", time: "", calories: "", hours: "" }
  ]);

  const [errors, setErrors] = useState([{}]);

  //  HANDLE INPUT CHANGE
  const handleChange = (index, field, value) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  //  ADD NEW FORM
  const addForm = () => {
    setForms([
      ...forms,
      { name: "", time: "", calories: "", hours: "" }
    ]);
    setErrors([...errors, {}]);
  };

  //  VALIDATION
  const validate = () => {
    let valid = true;

    const newErrors = forms.map((form) => {
      const err = {};

      // 🔹 Exercise & Meal
      if (type !== "sleep") {
        if (!form.name.trim()) {
          err.name = "Required";
          valid = false;
        }

        if (!form.time.trim()) {
          err.time = "Required";
          valid = false;
        } else if (!isValidTime(form.time)) {
          err.time = "Use format like 2PM or 2:10AM";
          valid = false;
        }

        if (!form.calories || Number(form.calories) <= 0) {
          err.calories = "Must be positive";
          valid = false;
        }
      }

      //  Sleep
      if (type === "sleep") {
        if (!form.hours) {
          err.hours = "Required";
          valid = false;
        } else if (Number(form.hours) <= 0) {
          err.hours = "Must be positive";
          valid = false;
        } else if (Number(form.hours) > 24) {
          err.hours = "Max 24 hours";
          valid = false;
        }
      }

      return err;
    });

    setErrors(newErrors);
    return valid;
  };

  //  SUBMIT
  const handleSubmit = () => {
    if (!validate()) return;

    forms.forEach((form) => {
      let activity = { type };

      // Exercise / Meal
      if (type === "exercise" || type === "meal") {
        activity = {
          type,
          title: form.name,
          time: form.time, // user format
          time24: convertTo24Hour(form.time), // 🔥 internal use
          calories: Number(form.calories)
        };
      }

      // Sleep
      if (type === "sleep") {
        activity = {
          type,
          hours: Number(form.hours)
        };
      }

      dispatch(
        addActivity({
          dateKey: formatDateKey(day.date),
          activity
        })
      );
    });

    handleClose();
  };

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      
      {forms.map((form, index) => (
        <Box key={index} display="flex" flexDirection="column" gap={2}>

          {/*  NAME */}
          {type !== "sleep" && (
            <TextField
              label="Name"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) =>
                handleChange(index, "name", e.target.value)
              }
              error={!!errors[index]?.name}
              helperText={errors[index]?.name}
            />
          )}

          {/*  TIME */}
          {type !== "sleep" && (
            <TextField
              label="Time (e.g. 2PM, 2:10AM)"
              placeholder="Enter like 2PM"
              value={form.time}
              onChange={(e) =>
                handleChange(index, "time", e.target.value)
              }
              error={!!errors[index]?.time}
              helperText={errors[index]?.time}
            />
          )}

          {/*  CALORIES */}
          {type !== "sleep" && (
            <TextField
              label="Calories"
              type="number"
              value={form.calories}
              onChange={(e) =>
                handleChange(index, "calories", e.target.value)
              }
              error={!!errors[index]?.calories}
              helperText={errors[index]?.calories}
            />
          )}

          {/*  SLEEP */}
          {type === "sleep" && (
            <TextField
              label="Sleep Hours"
              type="number"
              placeholder="Enter hours"
              value={form.hours}
              onChange={(e) =>
                handleChange(index, "hours", e.target.value)
              }
              error={!!errors[index]?.hours}
              helperText={errors[index]?.hours}
            />
          )}
        </Box>
      ))}

      {/*  ADD MORE FORM */}
      <IconButton onClick={addForm}>
        <AddIcon />
      </IconButton>

      {/* SUBMIT */}
      <Button variant="contained" onClick={handleSubmit}>
        Add {type}
      </Button>
    </Box>
  );
};

export default DynamicActivityForm;