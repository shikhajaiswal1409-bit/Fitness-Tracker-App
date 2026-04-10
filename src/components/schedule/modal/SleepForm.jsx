// import React, { useState } from "react";
// import { TextField, Button, Box } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addActivity } from "../../../features/schedule/scheduleSlice";
// import { formatDateKey } from "../../utils/dateUtils";

// const SleepForm = ({ handleClose, day }) => {

//   const dispatch = useDispatch();

//   const [data, setData] = useState({
//     hours: ""
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     dispatch(addActivity({
//       dateKey: formatDateKey(day.date),
//       activity: {
//         type: "sleep",
//         hours: Number(data.hours) // ✅ FIXED
//       }
//     }));

//     handleClose();
//   };

//   return (
//     <Box display="flex" flexDirection="column" gap={2}>
//       <TextField
//         label="Sleep Hours"
//         name="hours"
//         type="number"
//         onChange={handleChange}
//       />

//       <Button variant="contained" onClick={handleSubmit}>
//         Add Sleep
//       </Button>
//     </Box>
//   );
// };

// export default SleepForm;