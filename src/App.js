import './App.css';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import Roomdetail from './pages/Roomdetail';
import Roomsdet from './pages/Roomsdet';
import Logout from './pages/Logout';
import { createContext, useReducer } from 'react';
import { initialState ,reducer} from './reducer/UseReducer';


export const UserContext = createContext();


function App() {

const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{state ,dispatch}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/room-detail" element={<Roomdetail />} />
          <Route path="/room-det" element={<Roomsdet />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
