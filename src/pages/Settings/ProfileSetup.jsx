

import TextField from '@mui/material/TextField';
import { Box, Button, MenuItem, Avatar } from "@mui/material";
import React, { useState } from 'react';
import {
  FormContainer,
  FormRow,
  ProfileCard,
  SaveButton,
  Title
} from './settings.styles';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../features/profile/profileSlice';

const ProfileSetup = () => {
  const dispatch = useDispatch();
  const savedProfile = useSelector((state) => state.profile);

  const [profile, setLocalProfile] = useState(savedProfile);

  //  HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setLocalProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  //  HANDLE IMAGE UPLOAD
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setLocalProfile({
        ...profile,
        avatar: reader.result, // base64 string
      });
    };

    reader.readAsDataURL(file);
  };

  //  SAVE PROFILE
  const handleSave = () => {
    dispatch(setProfile(profile));
  };

  return (
    <ProfileCard>
      <Title>Profile Setup</Title>

      {/* PROFILE IMAGE */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
        <Avatar
          src={profile.avatar}
          sx={{ width: 80, height: 80, mb: 1 }}
        />

        <Button variant="outlined" component="label">
          Upload Photo
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={handleImageUpload}
          />
        </Button>
      </Box>

      <FormContainer>

        <TextField
          label="Name"
          name='name'
          fullWidth
          value={profile.name}
          onChange={handleChange}
        />

        <FormRow>
          <TextField
            label="Age"
            name='age'
            type='number'
            fullWidth
            value={profile.age}
            onChange={handleChange}
          />

          <TextField
            label="Height (cm)"
            name='height'
            type='number'
            fullWidth
            value={profile.height}
            onChange={handleChange}
          />
        </FormRow>

        <TextField
          label="Weight (Kg)"
          name='weight'
          type='number'
          fullWidth
          value={profile.weight}
          onChange={handleChange}
        />

        <TextField
          select
          label="Goal"
          name='goal'
          fullWidth
          value={profile.goal}
          onChange={handleChange}
        >
          <MenuItem value="muscles">Build Muscles</MenuItem>
          <MenuItem value="weight">Lose Weight</MenuItem>
          <MenuItem value="balance">Balance</MenuItem>
        </TextField>

        <SaveButton>
          <Button
            variant='contained'
            onClick={handleSave}
          >
            Save Profile
          </Button>
        </SaveButton>

      </FormContainer>
    </ProfileCard>
  );
};

export default ProfileSetup;