import { changeToTrue } from "../components/Chatpage/chatroomSlice";
import { BASE_URL_WS } from "./info";
var socket;
let connect = (onMessage, username, roomname,dispatch,throwErr) => {
  //var url = "ws://192.168.1.8:8080/join-room/" + username + "?rname=" + roomname;
var url = BASE_URL_WS+"/join-room/" + username + "?rname=" + roomname;
  socket = new WebSocket(url);

  socket.onopen = () => {
   
    dispatch(changeToTrue());

  };
  socket.onmessage = msg => {
    onMessage(msg);
  };
  socket.onclose = event => {
    throwErr(500);
  };

  socket.onerror = error => {
  throwErr(500);
  };
};

let sendMessage = msg => {
  console.log("sending msg: ", msg);
  socket.send(msg);
};


export { connect, sendMessage };