import { Typography, Box, Button, Container, TextField} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addUsername } from './usernameSlice';
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialusername = useSelector((state) => state.username.value);
  const [username, setUserName] = useState(initialusername);

  function handleChange(event) {
    setUserName(event.target.value);
  }
  function handleClick(op) {
    dispatch(addUsername(username));
    if (op === 'create') {
      navigate('/create-room');
    } else if(op === 'join') {
      navigate('/join-room');
    }

  }




  return (

    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
        <Typography variant="heading">
          Real-Time Chat App
        </Typography>
        <TextField
        id="username" 
        color="outline"
        onChange={handleChange}
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Box>
      <Box display="flex" justifyContent="center" width="100%" mt={2} gap="8px">
      <Button
       color="submit"
        variant="contained"
        startIcon={<AddIcon/>}
        onClick={() => handleClick('create')}>
        Create room
      </Button>

      <Button
        color='submit'
        variant="contained"
        endIcon={<ArrowForwardIcon/>}
        onClick={() => handleClick('join')}
      >Join room
      </Button>
      </Box>
     

    </Container>

  );
}
export default Home;
