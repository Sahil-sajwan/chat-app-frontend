import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Chatpage from './components/Chatpage/Chatpage';
import CreateRoom from './components/CreateRoom/CreateRoom';
import JoinRoom from './components/JoinRoom/JoinRoom';
import Error from './components/Error/Error';

const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<Error/>,
  children:[
  {
    index:true,
    element: <Home />,
  },
  {
    path: 'chatroom',
    element: <Chatpage />,
   
  },
  {
    path: 'create-room',
    element: <CreateRoom />,
   
  },
  {
    path: 'join-room',
    element: <JoinRoom />,
   
  },
]
}
]);

function App() {

  return (
      <RouterProvider router={router} />
  );

}

export default App;
