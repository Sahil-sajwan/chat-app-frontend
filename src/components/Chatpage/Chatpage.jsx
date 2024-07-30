import { useState, useEffect } from 'react';
import { Typography, Button, Container, TextField, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import SendIcon from '@mui/icons-material/Send';
import { connect, sendMessage } from '../../util/roomConnection';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../util/info';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { useDispatch } from 'react-redux';

function Chatpage() {

  const username = useSelector((state) => state.username.value);
  const isChatReady = useSelector((state) => state.chatroom.isReady);
  const [isErr, setIsErr] = useState({
    err: false,
    code: 0

  });
  const dispatch = useDispatch();
  const location = useLocation();

  function throwErr(code) {
    const error = {
      status: code,
    }
    throw error;
  }

  if (location.state === null || !location.state.hasOwnProperty('rname') || !location.state.hasOwnProperty('rpass')) {
    throwErr(401);
  }


  function onMessage(msg) {

    var msgObj = JSON.parse(msg.data);
    setMessageList((prev) => {
      return [...prev, msgObj];
    })
  }


  useEffect(() => {
    const data = new FormData();
    data.append('rname', location.state.rname);
    data.append('rpass', location.state.rpass);

    axios.post(BASE_URL + `/join-room/auth`, data)
      .then(res => {
        if (res.status === 200) {

          connect(onMessage, username, location.state.rname, dispatch, throwErr);

        } else {
          setIsErr({
            err: true,
            code: 500
          });
        }


      }).catch(err => {
        let code = 401;
        if (err.code === 'ERR_NETWORK') {
          code = 500;
        }
        setIsErr({
          err: true,
          code: code
        });
      })

  }, [username, location.state.rname, location.state.rpass,dispatch]);


  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage("");
    sendMessage(message);
  }

  function handleChange(event) {
    setMessage(event.target.value);
  }

  if (isErr.err) {
    throwErr(isErr.code);
  }

  if (!isChatReady) {
    return <Loading />
  }



  return (


    <Container>

      <Typography variant="heading">Welcome to chat app {username}</Typography>

      <InputLabel color="primary" htmlFor="message">Enter message</InputLabel>

      <TextField id="message" color="outline" variant="outlined" fullWidth multiline rows={4} onChange={handleChange} value={message} />
      <Button variant="contained" color="submit" onClick={handleClick} endIcon={<SendIcon />}>
        SEND
      </Button>

      {messageList.map((msg, idx) => {
        if (msg.type === 3) {
          return <div>
            <Typography>{msg.username + ": "}</Typography>
            <Typography variant="message" key={idx}>{msg.message}</Typography>
          </div>

        } else if (msg.type === 2) {
          return <Typography variant="left" key={idx}>{msg.username + " " + msg.message}</Typography>
        }
        return <Typography variant="joined" key={idx}>{msg.username + " " + msg.message}</Typography>


      })}

    </Container>
  );

}

export default Chatpage;