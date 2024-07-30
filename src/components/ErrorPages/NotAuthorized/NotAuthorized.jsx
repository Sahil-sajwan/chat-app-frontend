import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const NotAuthorized = () => {
  const navigate = useNavigate();

  function handleGoHome(){
    navigate('/');
  }
  function handleJoinRoom(){
    navigate('/join-room');
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" component="div" gutterBottom>
          Access Denied
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          You do not have permission to view this page.
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap='4px'>
          <Button startIcon={<HomeIcon/>} variant="contained" color="submit" onClick={handleGoHome}>
            Go Home
          </Button>
          <Button endIcon={<ArrowForwardIcon/>} variant="contained" color="submit" onClick={handleJoinRoom}>
            Join Room
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotAuthorized;
