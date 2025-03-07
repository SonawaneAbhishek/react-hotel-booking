import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { allRooms } from '../data/Allrooms';
import { Link, useLocation, useNavigate } from 'react-router-dom';


function Allrooms() {

    const navigate = useNavigate();
    const location = useLocation();
 
    // const locationdate = (location.state.date) ;
    const locationdate = location.state?.date || [];

    // const handleBook = ()=>{
    //     navigate('/room-detail',{state :{locationdate }});
    // }

    const handleBook = (roomTitle)=>{
        navigate('/room-detail',{state :{locationdate ,roomTitle}});
    }
        
    return (
        <div>
            <div className='container my-5'>
                <div className="row">
                    {allRooms.map((room)=>(
                        <div className="col-lg-4 col-md-6 mb-5 px-4 ">
                        <Card style={{ width: '25rem', marginBottom: "px", marginTop: "0px", border: "none", borderRadius: "none", backgroundColor: "" }}>
                            <Card.Img variant="top" src={room.image} />
                            <Card.Body>
                                <Card.Title className='roomCardTitle'>{room.roomTitle}</Card.Title>
                                <Card.Text style={{ color: "red" }}>
                                    <b>{room.rromCost}</b>
                                </Card.Text>

                                {/* <button className='btn btn-outline-primary' onClick={handleBook}>More Details</button> */}
                                <button className='btn btn-outline-primary' onClick={() => handleBook(room.roomTitle)}>More Details</button>
                            </Card.Body>
                        </Card>
                    </div>
                    ))}
                    
                </div>

            </div>

        </div>
    )
}

export default Allrooms;