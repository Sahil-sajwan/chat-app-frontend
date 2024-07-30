import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../util/info';
import Alert from '@mui/material/Alert';


const CreateRoom = () => {
  const navigate = useNavigate();
  const [roomName, setRoomName] = useState('');
  const [roomPassword, setRoomPassword] = useState('');
  const [err, setErr] = useState('');
  const [axioserr, setAxioserr] = useState(false);
  const username = useSelector((state) => state.username.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (roomName === '') {
      setErr("room name cannot be empty");
      return;
    }
    if (roomPassword === '') {
      setErr("room password cannot be empty");
      return;
    }

    var room = {
      rname: roomName,
      rpass: roomPassword
    };


    axios.post(BASE_URL + `/create-room/${username}`, room, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(d => {
      navigate('/join-room');

    }).catch(err => {
      setAxioserr(true);
    })

  };

  if (axioserr) {
    const err = {
      status: 500
    }
    throw err;
  }

  return (
    <Container maxWidth="sm">
      {err !== "" && <Alert severity='error'>{err}</Alert>}
      <Box sx={{ mt: 4 }}>
        <Typography variant="heading" gutterBottom>
          Create Room
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
            fullWidth
            margin="normal"
            color="outline"
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

export default CreateRoom;