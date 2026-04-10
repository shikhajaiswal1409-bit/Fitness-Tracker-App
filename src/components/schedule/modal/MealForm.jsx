// // import React, { useState } from "react";
// // import { TextField, Button, Box } from "@mui/material";
// // import { useDispatch } from "react-redux";
// // import { addActivity } from "../../../features/schedule/scheduleSlice";
// // import { formatDateKey } from "../../utils/dateUtils";

// // const MealForm = ({ handleClose, day }) => {

// //   const dispatch = useDispatch();

// //   const [data, setData] = useState({
// //     name: "",
// //     time: "",
// //     calories: ""
// //   });

// //   const handleChange = (e) => {
// //     setData({ ...data, [e.target.name]: e.target.value });
// //   };

// //  const handleSubmit = () => {
// //   dispatch(addActivity({
// //     dateKey: formatDateKey(day.date),
// //     activity: {
// //       type: "meal",
// //       title: data.name,
// //       time: data.time,
// //       calories: data.calories
// //     }
// //   }));

// //   handleClose();
// // };

// //   return (
// //     <Box display="flex" flexDirection="column" gap={2}>

// //       <TextField label="Meal Name" name="name" onChange={handleChange} />
// // <TextField label="Time" name="time" type="number" onChange={handleChange} />
// // <TextField label="Calories Intake" name="calories" type="number" onChange={handleChange} />
// //       <Button variant="contained" onClick={handleSubmit}>
// //         Add Meal
// //       </Button>

// //     </Box>
// //   );
// // };

// // export default MealForm;

// import React, { useState } from "react";
// import { TextField, Button, Box } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addActivity } from "../../../features/schedule/scheduleSlice";
// import { formatDateKey } from "../dateUtils";
// import { formatTime } from "../../utils/timeUtils";

// const MealForm = ({ handleClose, day }) => {
//   const dispatch = useDispatch();

//   const [data, setData] = useState({
//     name: "",
//     time: "",
//     calories: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     let { name, value } = e.target;

//     if (name === "time") {
//       value = formatTime(value);
//     }

//     setData({ ...data, [name]: value });
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!data.name.trim()) {
//       newErrors.name = "Meal name required";
//     }

//     if (!data.time.trim()) {
//       newErrors.time = "Enter valid time (e.g. 2PM)";
//     }

//     if (!data.calories || Number(data.calories) <= 0) {
//       newErrors.calories = "Calories must be positive";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validate()) return;

//     dispatch(
//       addActivity({
//         dateKey: formatDateKey(day.date),
//         activity: {
//           type: "meal",
//           title: data.name,
//           time: data.time,
//           calories: Number(data.calories)
//         }
//       })
//     );

//     handleClose();
//   };

//   return (
//     <Box display="flex" flexDirection="column" gap={2}>
//       <TextField
//         label="Meal Name"
//         name="name"
//         value={data.name}
//         onChange={handleChange}
//         error={!!errors.name}
//         helperText={errors.name}
//       />

//       <TextField
//         label="Time (e.g. 2PM)"
//         name="time"
//         value={data.time}
//         onChange={handleChange}
//         error={!!errors.time}
//         helperText={errors.time}
//       />

//       <TextField
//         label="Calories Intake"
//         name="calories"
//         type="number"
//         value={data.calories}
//         onChange={handleChange}
//         error={!!errors.calories}
//         helperText={errors.calories}
//       />

//       <Button variant="contained" onClick={handleSubmit}>
//         Add Meal
//       </Button>
//     </Box>
//   );
// };

// export default MealForm;