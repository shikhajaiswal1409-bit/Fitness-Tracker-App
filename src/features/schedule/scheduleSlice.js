import { createSlice } from "@reduxjs/toolkit";

//  LOAD FROM LOCAL STORAGE
const loadSchedule = () => {
  try {
    return JSON.parse(localStorage.getItem("schedule")) || {};
  } catch {
    return {};
  }
};

//  SAVE TO LOCAL STORAGE
const saveSchedule = (state) => {
  localStorage.setItem("schedule", JSON.stringify(state));
};

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: loadSchedule(),

  reducers: {

    //  ADD ACTIVITY
    addActivity: (state, action) => {
      const { dateKey, activity } = action.payload;

      if (!state[dateKey]) {
        state[dateKey] = [];
      }

      state[dateKey].push({
        ...activity,
        type: activity.type 
      });

      saveSchedule(state);
    },

    // UPDATE ACTIVITY 
    updateActivity: (state, action) => {
      const { dateKey, index, updatedActivity } = action.payload;

      if (!state[dateKey]) return;

      state[dateKey][index] = {
        ...state[dateKey][index], //  keep old fields
        ...updatedActivity,       //  overwrite with new
        type: updatedActivity.type || state[dateKey][index].type //  never lose type
      };

      saveSchedule(state);
    },

    //  DELETE ACTIVITY
    deleteActivity: (state, action) => {
      const { dateKey, index } = action.payload;

      if (!state[dateKey]) return;

      state[dateKey].splice(index, 1);

      saveSchedule(state);
    },

    //  OPTIONAL: CLEAR DAY (bonus)
    clearDay: (state, action) => {
      const { dateKey } = action.payload;

      delete state[dateKey];

      saveSchedule(state);
    }
  },
});

export const {
  addActivity,
  updateActivity,
  deleteActivity,
  clearDay
} = scheduleSlice.actions;

export default scheduleSlice.reducer;