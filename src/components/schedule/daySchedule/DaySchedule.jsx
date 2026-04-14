import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IconButton, Typography, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { formatDateKey, isFutureDate } from "../../utils/dateUtils";
import { deleteActivity } from "../../../features/schedule/scheduleSlice";

import EditActivityModal from "../modal/EditActivityModal";

import {
  Container,
  Header,
  Timeline,
  ActivityCard,
  ActivityInfo,
  ActivityTitle,
  ActivityMeta,
  Actions,
  AddButton
} from "./DaySchedule.styles";


// 🔥 EMPTY STATE
const EmptyState = () => (
  <Box textAlign="center" py={6}>
    <Typography fontSize={20} fontWeight={600}>
      No activities yet 🚀
    </Typography>
    <Typography color="text.secondary">
      Start building your day
    </Typography>
  </Box>
);


const DaySchedule = ({ day, handleOpen }) => {

  const schedule = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  const key = formatDateKey(day.date);
  const activities = schedule[key] || [];

  const isFuture = isFutureDate(new Date(day.date));

  const [editData, setEditData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleEdit = (index, activity) => {
    setEditIndex(index);
    setEditData(activity);
    setOpenEdit(true);
  };

  // 🎨 COLORS
  const getColor = (type) => {
    if (type === "exercise") return "#3A8DFF";
    if (type === "meal") return "#FF5F6D";
    if (type === "sleep") return "#22C55E";
    return "#999";
  };

  return (
    <Container>

      {/* HEADER */}
      <Header>
        {day.label}, {new Date(day.date).toDateString()}
      </Header>

      {/* TIMELINE */}
      {activities.length === 0 ? (
        <EmptyState />
      ) : (
        <Timeline>

          {activities.map((a, i) => (
            <ActivityCard key={i} color={getColor(a.type)}>

              <ActivityInfo>
                <ActivityTitle>
                  {a.title || a.type.toUpperCase()}
                </ActivityTitle>

                <ActivityMeta>
                  {a.time || `${a.hours || 0} hrs`} • {a.calories ?? 0} kcal
                </ActivityMeta>
              </ActivityInfo>

              <Actions>
                <IconButton onClick={() => handleEdit(i, a)}>
                  <EditIcon />
                </IconButton>

                <IconButton
                  onClick={() =>
                    dispatch(deleteActivity({ dateKey: key, index: i }))
                  }
                >
                  <DeleteIcon />
                </IconButton>
              </Actions>

            </ActivityCard>
          ))}

        </Timeline>
      )}

      {/* ADD BUTTON */}
      {!isFuture && (
        <AddButton onClick={handleOpen}>
          + Add Activity
        </AddButton>
      )}

      {/* EDIT MODAL */}
      <EditActivityModal
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        activity={editData}
        index={editIndex}
        day={day}
      />

    </Container>
  );
};

export default DaySchedule;