// import React, { useState } from "react";
// import { TextField, Button, Box } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addActivity } from "../../../features/schedule/scheduleSlice";
// import { formatDateKey } from "../../utils/dateUtils";

// const ExerciseForm = ({ handleClose, day }) => {

//   const dispatch = useDispatch();

//   const [data, setData] = useState({
//     name: "",
//     time: "",
//     calories: ""
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {

//     const activity = {
//       type: "exercise",
//       title: data.name,
//       time: data.time,
//       calories: data.calories
//     };

//     dispatch(addActivity({
//       dateKey: formatDateKey(day.date),
//       activity
//     }));

//     handleClose(); // ✅ close modal
//   };

//   return (
//     <Box display="flex" flexDirection="column" gap={2}>

//       <TextField label="Exercise Name" name="name" onChange={handleChange} />
//       <TextField label="Duration (minutes)" name="time" type="number" onChange={handleChange} />
//       <TextField label="Calories Burned" name="calories" type="number" onChange={handleChange} />

//       <Button variant="contained" onClick={handleSubmit}>
//         Add Exercise
//       </Button>

//     </Box>
//   );
// };

// export default ExerciseForm;