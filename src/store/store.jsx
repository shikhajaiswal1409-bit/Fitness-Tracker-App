import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice"
import scheduleReducer from "../features/schedule/scheduleSlice"

export const store = configureStore({
    reducer:{
        profile: profileReducer,
        schedule: scheduleReducer,
    }
})