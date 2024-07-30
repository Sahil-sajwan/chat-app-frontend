import React from 'react';
import { CircularProgress, Container, Box, Typography } from '@mui/material';

const Loading = () => {
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
        <CircularProgress color='submit'/>
        <Typography variant="h6" component="div" gutterBottom>
          Loading...
        </Typography>
      </Box>
    </Container>
  );
};

export default Loading;
