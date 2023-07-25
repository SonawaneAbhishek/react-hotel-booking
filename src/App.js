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




function App() {
  return (
    // <div>
    //   <Home/>
    //   {/* <About/> */}
    //   {/* <Facilities/> */}
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/rooms" element={<Rooms/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/room-detail" element={<Roomdetail/>}/>
        <Route path="/room-det" element={<Roomsdet/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
