import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Button,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { formatDateKey, isFutureDate } from "../../utils/dateUtils";
import { deleteActivity } from "../../../features/schedule/scheduleSlice";

import EditActivityModal from "../modal/EditActivityModal";

const DaySchedule = ({ day, handleOpen }) => {

  const schedule = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  // DATE KEY
  const key = formatDateKey(day.date);
  const activities = schedule[key] || [];

  //  FUTURE FIX
  const isFuture = isFutureDate(new Date(day.date));

  //  EDIT STATE
  const [editData, setEditData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = (index, activity) => {
    setEditIndex(index);
    setEditData(activity);
    setOpenEdit(true);
  };

  return (
    <Box>

      {/* HEADER */}
      <Typography fontSize={20} fontWeight={600} mb={2}>
        {day.label}, {new Date(day.date).toDateString()}
      </Typography>

      {/* MAIN CARD */}
      <Paper
        sx={{
          p: 3,
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >

        {/* ACTIVITY OVERVIEW */}
        <Box mb={3}>
          <Typography fontWeight={500}>
            Activities Overview
          </Typography>

          <Box display="flex" gap={2} mt={1} flexWrap="wrap">
            {activities.map((a, i) => (
              <Box
                key={i}
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "8px",
                  background: "#f3f5fa",
                }}
              >
                {a.title || a.type}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ADD BUTTON */}
        <Button
          variant="contained"
          onClick={handleOpen}
          disabled={isFuture}
        >
          + Add Activity
        </Button>

        {/* TABLE */}
        <Box mt={3}>
          <Table>

            <TableHead>
              <TableRow>
                <TableCell><b>Type</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Duration</b></TableCell>
                <TableCell><b>Calories</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {activities.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No activities added
                  </TableCell>
                </TableRow>
              ) : (
                activities.map((a, i) => (
                  <TableRow key={i}>

                    <TableCell>{a.type}</TableCell>
                    <TableCell>{a.title || "-"}</TableCell>
                    <TableCell>{a.time || a.hours || "-"}</TableCell>
                    <TableCell>{a.calories ?? "-"}</TableCell>

                    {/* ACTION BUTTONS */}
                    <TableCell>

                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(i, a)}
                      >
                        <EditIcon />
                      </IconButton>

                      <IconButton
                        color="error"
                        onClick={() =>
                          dispatch(deleteActivity({
                            dateKey: key,
                            index: i
                          }))
                        }
                      >
                        <DeleteIcon />
                      </IconButton>

                    </TableCell>

                  </TableRow>
                ))
              )}
            </TableBody>

          </Table>
        </Box>

      </Paper>

      {/* EDIT MODAL */}
      <EditActivityModal
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        activity={editData}
        index={editIndex}
        day={day}
      />

    </Box>
  );
};

export default DaySchedule;