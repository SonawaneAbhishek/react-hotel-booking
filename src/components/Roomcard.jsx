import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import deluxe from "../assets/room-deluxe.jpg"
import singleroom from "../assets/singleroom.jpg";
import kingroom from "../assets/kingroom.jpg";
import familyroom from "../assets/familyroom.jpg";
import honeymoon from "../assets/honeymoon.jpg";
import "./Roomcard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';


function Roomcard() {
    return (
        <div className='container' style={{ marginBottom: "100px" }}>
            <div className='d-flex ' style={{ marginBottom: "50px" }}>
                <Card style={{ width: '50rem', marginBottom: "px", marginTop: "0px" }}>
                    <Card.Img variant="top"class="img-fluid"  src={deluxe} />
                    <Card.Body>
                        <Card.Title className='cardTitle'>Deluxe Room</Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                <div className='d-flex '>
                    <div style={{ marginLeft: "30px" }}>
                        <Card className='Uppercard' >
                            <Card.Img variant="top"class="img-fluid"  src={singleroom} />
                            <Card.Body style={{ paddingBottom: "0px" }}>
                                <Card.Title className='cardTitle'>Single Room</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='Lowercard' >
                            <Card.Img variant="top"class="img-fluid"  src={kingroom} />
                            <Card.Body style={{ paddingBottom: "0px" }}>
                                <Card.Title className='cardTitle'>King Room</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginLeft: "30px" }}>
                        <Card className='Uppercard'>
                            <Card.Img variant="top" class="img-fluid" src={familyroom} />
                            <Card.Body style={{ paddingBottom: "0px" }}>
                                <Card.Title className='cardTitle'>Family Room</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='Lowercard' >
                            <Card.Img variant="top"class="img-fluid"  src={honeymoon} />
                            <Card.Body style={{ paddingBottom: "0px" }}>
                                <Card.Title className='cardTitle'>Couple Room</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            </div>
            
            <center><Link className="nav-link active" aria-current="page" to="/rooms"><button type="button" class="btn btn-outline-warning room-but"><text>View all Rooms</text><FontAwesomeIcon style={{marginLeft:"10px",height:"20px"}} icon={faCircleArrowRight} /></button></Link></center>

        </div>
    )
}

export default Roomcard;