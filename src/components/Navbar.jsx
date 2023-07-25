import React, { useState } from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';


function Navbar() {

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">

                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b className='logo-icon' style={{ fontFamily: "sans-serif" }}><img src={logo} style={{ height: "100px", marginLeft: "8px" }} />  {/*<br/> &nbsp; Hotel Abhishek*/}</b></Link>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 about-us" style={{ fontSize: "20px", gap: "20px" }}>
                            <li className="nav-item" style={{ marginLeft: "280px" }}>
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/rooms">Our Rooms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/facilities">Facilities</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/contact-us">Contact us</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

                            {/* login modal funtainality */}
                            {/* <button className="btn btn-outline-dark" type="submit" onClick={handleShow} > Login</button> */}
                            {/* <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="name@example.com"
                                                autoFocus
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Login
                                    </Button>
                                    
                                </Modal.Footer>
                            </Modal> */}
                            {/* login modal functionality end */}

                            <Link to="/login"><button className="btn btn-outline-dark" type="submit">Login</button></Link>
                            <Link to="/register"><button className="btn btn-dark but-col" type="submit">Register</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
