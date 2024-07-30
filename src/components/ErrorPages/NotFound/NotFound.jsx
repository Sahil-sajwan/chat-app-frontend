import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

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
                <Typography variant="h1" component="div" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                    Oops! Page not found.
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                    The page you are looking for does not exist.
                </Typography>
                <Button variant="contained" color="submit" onClick={handleGoHome}>
                    Go Home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;