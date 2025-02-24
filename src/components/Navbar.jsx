import React, { useContext } from 'react'
import './Navbar.css';
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import { UserContext } from "../App";

function Navbar() {
    const { state, dispatch } = useContext(UserContext);
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">

                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">
                                <b className='logo-icon'> &nbsp; Abhishek Hotel</b>
                                {/* <img src={logo} style={{ height: "100px", marginLeft: "8px" }} /> */}
                            </NavLink>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 about-us" style={{ fontSize: "20px", gap: "20px" }}>
                                    <li className="nav-item" style={{ marginLeft: "280px" }}>
                                        <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/rooms">Our Rooms</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/facilities">Facilities</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/contact-us">Contact us</NavLink>
                                    </li>

                                </ul>
                                <form className="d-flex mx-3" role="search">
                                    <NavLink to="/logout"><button className="btn btn-dark but-col" type="submit">Logout</button></NavLink>
                                </form>

                            </div>
                        </div>
                    </nav>
                </>
            )
        }
        else {
            return (
                <>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">

                        <div className="container-fluid">

                            <NavLink className="navbar-brand" to="/">
                                <b className='logo-icon'> &nbsp; Abhishek Hotel</b>
                                {/* <img src={logo} style={{ height: "100px", marginLeft: "12px" }} /> */}
                            </NavLink>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 about-us" style={{ fontSize: "20px", gap: "20px" }}>
                                    <li className="nav-item" style={{ marginLeft: "280px" }}>
                                        <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/rooms">Our Rooms</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/facilities">Facilities</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link active" aria-current="page" to="/contact-us">Contact us</NavLink>
                                    </li>

                                </ul>
                                <form className="d-flex" role="search">
                                    <NavLink to="/signin"><button className="btn btn-outline-dark" type="submit">Login</button></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <NavLink to="/signup"><button className="btn btn-dark but-col" type="submit">Register</button></NavLink>

                                </form>

                            </div>
                        </div>
                    </nav>
                </>
            )
        }

    }
    console.log("token" ,localStorage.getItem('jwtoken'));


    return (
        <div>
            <RenderMenu></RenderMenu>
        </div>
    )
}

export default Navbar;
