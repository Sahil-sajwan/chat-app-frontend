import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import NotAuthorized from '../ErrorPages/NotAuthorized/NotAuthorized';
import NotFound from '../ErrorPages/NotFound/NotFound';

const Error = () => {

    const navigate = useNavigate();
    const error = useRouteError();

    if (error.status === 401) {
        return <NotAuthorized />
    } else if (error.status === 404) {
        return <NotFound />
    }
  

    function handleGoHome(){
      navigate('/');
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
            Something Went Wrong
          </Typography>
          <Typography variant="body1" component="div" gutterBottom>
            An unknown error occurred. Please try again later.
          </Typography>
          <Button variant="contained" color="submit" onClick={handleGoHome}>
            Go Home
          </Button>
        </Box>
      </Container>
    );
    
};

export default Error;
