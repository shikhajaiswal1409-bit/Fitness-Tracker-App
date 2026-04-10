import { createSlice } from "@reduxjs/toolkit";

// LOAD FROM LOCAL STORAGE
const loadProfile = () => {
  try {
    const data = localStorage.getItem("profile");
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error("Load profile error:", err);
    return null;
  }
};

// SAVE TO LOCAL STORAGE
const saveProfile = (state) => {
  try {
    localStorage.setItem("profile", JSON.stringify(state));
  } catch (err) {
    console.error("Save profile error:", err);
  }
};

//  INITIAL STATE
const initialState = loadProfile() || {
  name: "",
  age: "",
  height: "",
  weight: "",
  goal: "",
  avatar: "",
  startDate: new Date().toISOString().split("T")[0], // ✅ FIXED
  streak: 0
};

//  SLICE
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {

    // SET PROFILE
    setProfile: (state, action) => {

  const isFirstTime = !state.name;

  const newState = {
    ...state,
    ...action.payload,

    startDate: isFirstTime
      ? new Date().toISOString().split("T")[0] //  FIXED
      : state.startDate
  };

  saveProfile(newState);
  return newState;
},

    //  SET STREAK
    setStreak: (state, action) => {
      state.streak = action.payload;
      saveProfile(state);
    },

    //  RESET PROFILE 
    resetProfile: () => {
      localStorage.removeItem("profile");
      return {
        name: "",
        age: "",
        height: "",
        weight: "",
        goal: "",
        startDate: new Date().toISOString(),
        streak: 0
      };
    }

  }
});

export const { setProfile, setStreak, resetProfile } = profileSlice.actions;

export default profileSlice.reducer;


