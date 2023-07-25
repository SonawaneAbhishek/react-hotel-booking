import React, { useState } from 'react'
import Menuheader from '../components/Menuheader'
import Navbar from '../components/Navbar'
import "./Roomdetail.css";
import { format } from "date-fns";
import { useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/room-details-img1.jpg";
import img2 from "../assets/room-details-img2.jpg"
import img3 from "../assets/room-details-img3.jpg"

function Roomdetail() {

    const location = useLocation()
    // console.log(location.state)
    const [date, setDate] = useState(location.state.locationdate);



    return (
        <div>
            <Navbar />
            <Menuheader menuTitle="Room-Detail" />

            <div className="container my-5 col-md-12 d-flex">

                <div className="col-md-3 bookingSheet">
                    <div className="upperSearch">
                        <h1 className='siTitle'>Booking Sheet</h1>
                        <div className="siItem">
                            <label>Check In - Check Out</label>
                            <span>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
                        </div>
                        <div className="siItem">
                            <label>No .of people</label>

                            <select className='peopleDrop'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>

                        </div>
                        <div className='siItem'>
                            <label>No. of Rooms</label>
                            <select className='peopleDrop'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>

                        </div>
                        <div className='siItem'>
                            <label>Room Type</label>
                            <select className='peopleDrop'>
                                <option>Regular</option>
                                <option>Premium</option>

                            </select>

                        </div>
                        <button style={{ width: "100%", marginTop: "10px", padding: "15px" }} className='btn btn-outline-danger'>Book Now</button>

                    </div>

                    <div className="lowerSearch my-5">

                        <h3>Basic Plan Facilities</h3>

                        <div className='col-md-12 planList my-5'>
                            <div className="col-md-6 ">
                                <p className='planText'>Lunch Facility</p>
                                <p className='planText'>Breakfast Facility</p>
                                <p className='planText'>Outdoor Kitchen</p>
                                <p className='planText'>Dinner Facility</p>
                            </div>
                            <div className="col-md-6 ">
                                <p className='planText'>Wireless Connectivity</p>
                                <p className='planText'>Double Bed</p>
                                <p className='planText'>5 Star Food Favor</p>
                                <p className='planText'>Lunch Facility</p>
                            </div>

                        </div>

                        <h3>Premium Plan Facilities</h3>
                        <div className='col-md-12 planList my-5'>
                            <div className="col-md-6 ">
                                <p className='planText'>Lunch Facility</p>
                                <p className='planText'>Breakfast Facility</p>
                                <p className='planText'>Outdoor Kitchen</p>
                                <p className='planText'>Dinner Facility</p>
                                <p className='planText'>Satellite Tv</p>
                            </div>
                            <div className="col-md-6 ">
                                <p className='planText'>Mini-Bar</p>
                                <p className='planText'>Wireless Connectivity</p>
                                <p className='planText'>Double Bed</p>
                                <p className='planText'>5 Star Food Favor</p>
                                <p className='planText'>Air Condition Facility</p>
                            </div>

                        </div>

                    </div>

                </div>


                <div className="col-md-9 roomDetails">
                    <Carousel >
                        <Carousel.Item >
                            <img
                                className="d-block mx-auto w-100 img-caruosal"
                                style={{ height: "500px" }}
                                src={img1}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block mx-auto w-100 img-caruosal2"
                                style={{ height: "500px" }}
                                src={img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block mx-auto w-100 img-caruosal3"
                                style={{ height: "500px" }}
                                src={img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <div className="roomDetailText my-5">
                        <h3 className='detailHead'>Double Bed Suits With Royal Express and Super Duplex Feelings</h3>
                        <div className="pricing">
                            <span className='pricing'>3500 / Per Night</span>
                            <span className='premiumPrice my-5'>Premium  : 4000/Night</span>
                        </div>

                        <hr />
                        <p className='firstPara'> Double Bed 5 Star Food Favor
                            Premium Plan Facilities
                            Double Bed Lunch Facility Dinner Facility Breakfast Facility Outdoor Kitchen Shampoo and Soap Wireless Connectivity Mini-Bar 5 Star Food Favor Buffet Dinner Satellite Tv Air Condition Facility
                            Double Bed Suits With Royal Express and Super Duplex Feelings</p>
                        <p>Basic : $120/Night/Room Premium : $140/Night/Room
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roomdetail;