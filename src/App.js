
import { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter, Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import Posts from './components/Posts';
import { LoginContext } from './context/LoginContext';

function App() {

  const [user, setUser] = useState(true)

  const { firstName } = useContext(LoginContext)
  return (
    <div >
      <BrowserRouter>


        <>
          <Routes>
            {firstName &&
              <>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </>
            }
            <Route path="*" exact element={<Notfound />} />

            <Route path="/" element={<Home />}></Route>

          </Routes>
        </>
      </BrowserRouter>
    </div >
  );
}

export default App;
