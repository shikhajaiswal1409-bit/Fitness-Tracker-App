import TextField from "@mui/material/TextField";
import {
  MenuItem,
  Avatar,
  Typography,
  Snackbar,
  Alert,
  Box,
  Button
} from "@mui/material";
import React, { useState } from "react";

import {
  AvatarWrapper,
  AvatarRing,
  FormContainer,
  FormRow,
  ProfileCard,
  SaveButton,
  SaveButtonWrapper,
  SettingsContainer,
  Title
} from "./settings.styles";

import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../features/profile/profileSlice";
import { useNavigate } from "react-router-dom";

import AIStatusOverlay from "./AIStatus";
import { speak } from "../../components/utils/speech";
import { getGoalSuggestion } from "../../components/utils/aiSuggestion";
import { launchConfetti } from "../../components/utils/confetti";

const ProfileSetup = () => {
  const dispatch = useDispatch();
  const savedProfile = useSelector((state) => state.profile);

  const [profile, setLocalProfile] = useState(savedProfile);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const isNewUser = !profile.name;

  // Snackbar
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success"
  });

  // AI Overlay
  const [aiStatus, setAiStatus] = useState({
    open: false,
    status: "loading",
    message: ""
  });

  // 🎯 INPUT STYLE
  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      "&:hover fieldset": {
        borderColor: "#3f7afc"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3f7afc",
        boxShadow: "0 0 0 2px rgba(63,122,252,0.2)"
      }
    }
  };

  // 🔢 NUMBER INPUT CONTROL
  const numberInputProps = {
    inputProps: { min: 1 },
    onKeyDown: (e) => {
      if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
      }
    }
  };

  // 🔄 HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ["age", "height", "weight"];

    setLocalProfile({
      ...profile,
      [name]: numericFields.includes(name)
        ? value === ""
          ? ""
          : Number(value)
        : value
    });
  };

  // 🖼 IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setLocalProfile({
        ...profile,
        avatar: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!profile.name?.trim()) newErrors.name = "Name required";

    if (!Number.isFinite(profile.age) || profile.age <= 0)
      newErrors.age = "Enter valid age";

    if (!Number.isFinite(profile.height) || profile.height <= 0)
      newErrors.height = "Enter valid height";

    if (!Number.isFinite(profile.weight) || profile.weight <= 0)
      newErrors.weight = "Enter valid weight";

    if (!profile.goal) newErrors.goal = "Select goal";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSnackbar({
        open: true,
        message: "⚠️ Invalid inputs detected",
        severity: "error"
      });

      speak("Invalid inputs detected");
      return false;
    }

    return true;
  };

  // 💾 SAVE
  const handleSave = async () => {
    if (!validate()) return;

    speak("Analyzing your profile");

    setAiStatus({
      open: true,
      status: "loading",
      message: "Analyzing your health data..."
    });

    await new Promise((r) => setTimeout(r, 1500));

    dispatch(setProfile(profile));

    launchConfetti();
    speak("Profile updated successfully");

    setAiStatus({
      open: true,
      status: "success",
      message: "Profile Saved"
    });

    setSnackbar({
      open: true,
      message: "✅ Profile updated successfully",
      severity: "success"
    });

    setTimeout(() => {
      setAiStatus({
        open: false,
        status: "",
        message: ""
      });
      navigate("/");
    }, 1500);
  };

  // 📊 BMI
  const bmi =
    profile.height && profile.weight
      ? (profile.weight / ((profile.height / 100) ** 2)).toFixed(1)
      : 0;

  const suggestion = getGoalSuggestion(profile.weight, profile.height);

  return (
    <>
      <SettingsContainer>
        <ProfileCard>
          {isNewUser && (
            <Box
              sx={{
                mb: 2,
                p: 2,
                borderRadius: "12px",
                background: "rgba(239,68,68,0.1)",
                color: "#ef4444",
                fontWeight: 600,
                textAlign: "center"
              }}
            >
              🚀 Complete your profile to unlock dashboard
            </Box>
          )}

          <Title>⚙️ Profile Setup</Title>

          {/* AVATAR */}
          <AvatarWrapper>
            <AvatarRing>
              <Avatar src={profile.avatar} sx={{ width: 90, height: 90 }}>
                {!profile.avatar && profile.name?.[0]}
              </Avatar>
            </AvatarRing>

            <Button variant="outlined" component="label" sx={{ mt: 1 }}>
              Upload Photo
              <input hidden type="file" onChange={handleImageUpload} />
            </Button>
          </AvatarWrapper>

          <FormContainer>
            {/* NAME */}
            <TextField
            type="text"
              label="Name"
              name="name"
              value={profile.name || ""}
              onChange={handleChange}
              sx={inputStyle}
              error={!!errors.name}
              helperText={errors.name}
            />

            {/* AGE + HEIGHT */}
            <FormRow>
              <TextField
                label="Age"
                name="age"
                type="number"
                value={profile.age || ""}
                onChange={handleChange}
                sx={inputStyle}
                error={!!errors.age}
                helperText={errors.age}
                {...numberInputProps}
              />

              <TextField
                label="Height (cm)"
                name="height"
                type="number"
                value={profile.height || ""}
                onChange={handleChange}
                sx={inputStyle}
                error={!!errors.height}
                helperText={errors.height}
                {...numberInputProps}
              />
            </FormRow>

            {/* WEIGHT */}
            <TextField
              label="Weight (kg)"
              name="weight"
              type="number"
              value={profile.weight || ""}
              onChange={handleChange}
              sx={inputStyle}
              error={!!errors.weight}
              helperText={errors.weight}
              {...numberInputProps}
            />

            {/* GOAL */}
            <TextField
              select
              label="Goal"
              name="goal"
              value={profile.goal || ""}
              onChange={handleChange}
              sx={inputStyle}
              error={!!errors.goal}
              helperText={errors.goal}
            >
              <MenuItem value="muscles">Build Muscles</MenuItem>
              <MenuItem value="weight">Lose Weight</MenuItem>
              <MenuItem value="balance">Balance</MenuItem>
            </TextField>

            {/* 🤖 AI SUGGESTION */}
            {suggestion && (
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg,#3f7afc,#00c6ff)",
                  color: "#fff",
                  fontWeight: 500,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
              >
                🤖 {suggestion.message}
              </Box>
            )}

            {/* 📊 BMI */}
            {bmi > 0 && (
              <Box
                sx={{
                  p: 2,
                  borderRadius: "12px",
                  background: "#f5f6fa",
                  textAlign: "center"
                }}
              >
                <Typography fontWeight={600}>
                  BMI: {bmi}
                </Typography>
              </Box>
            )}

            {/* SAVE BUTTON */}
            <SaveButtonWrapper>
              <SaveButton onClick={handleSave}>
                Save Profile
              </SaveButton>
            </SaveButtonWrapper>
          </FormContainer>
        </ProfileCard>
      </SettingsContainer>

      {/* AI Overlay */}
      <AIStatusOverlay {...aiStatus} />

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnackbar({ ...snackbar, open: false })
        }
      >
        <Alert severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProfileSetup;