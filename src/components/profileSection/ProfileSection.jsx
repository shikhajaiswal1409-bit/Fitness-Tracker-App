import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react'
import { Card, EditText, Item, Container, Value, Label } from './profile.styles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileSection = () => {
  const profile = useSelector((state)=>state.profile)

  const defaultProfile = {
  name: "Guest",
  age: "-",
  height: "-",
  weight: "-",
};

const navigate = useNavigate();

const user = profile.name ? profile : defaultProfile;
  return (
    <Card>
      <EditText onClick={()=> navigate("/settings")}>Edit</EditText>
      <Box>
<Avatar
  src={profile.avatar || ""}
  sx={{ width: 60, height: 60 }}
>
  {!profile.avatar && user.name?.[0]}
</Avatar>
      <Box>
      <Typography fontSize={20} fontWeight={600}>{user.name}</Typography>
      <Typography color='text.secondary' fontSize={15}> Age: {user.age} years</Typography>
      </Box>

      </Box>

      <Container>
        <Item>
          <Label>HEIGHT</Label>
          <Value>{user.height} cm</Value>
        </Item>

        <Item>
          <Label>WEIGHT</Label>
          <Value>{user.weight} kg</Value>
        </Item>

      </Container>

    </Card>
  )
}

export default ProfileSection
