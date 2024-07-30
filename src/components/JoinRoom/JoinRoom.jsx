import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import {useNavigate} from 'react-router-dom'


const JoinRoom = () => {
    const navigate=useNavigate();
  const [roomName, setRoomName] = useState('');
  const [roomPassword, setRoomPassword] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
   navigate('/chatroom',{state:{
    rname:roomName,
    rpass:roomPassword
   }});
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="heading" gutterBottom>
          Join Room
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Room Name"
            variant="outlined"
            fullWidth
            margin="normal"
            color="outline"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <TextField
            label="Room Password"
            variant="outlined"
            color="outline"
            fullWidth
            margin="normal"
            type="password"
            value={roomPassword}
            onChange={(e) => setRoomPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default JoinRoom;