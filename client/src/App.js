import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './pages/ChatPage';
import socketIO from 'socket.io-client';
import Signup from './components/Signup';
import withAuth from './utils/withAuth';
import NotFound from './pages/NotFound';

const socket = socketIO.connect('http://localhost:5000');
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            index
            element={withAuth(<Home socket={socket} />)}
            path='/'
          ></Route>
          <Route
            path='/chat'
            element={withAuth(<ChatPage socket={socket} />)}
          ></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
