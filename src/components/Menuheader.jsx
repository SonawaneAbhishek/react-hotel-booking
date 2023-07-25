import React from 'react'
import roomheader from "../assets/rooms.avif";
import "./Menuheader.css"
import { Link } from 'react-router-dom';

function Menuheader(props) {
    return (
        <div>
            <div className='roomheader'>

                <div className='roomHeaderImg'>
                    <img style={{ width: "100%", height: "400px" }}class="img-fluid"  src={roomheader} alt="" />

                </div>

                <div className='roomHeaderText'>
                    <h4><Link style={{color:"white",textDecoration:"none"}} to='/'>Home</Link> > {props.menuTitle}   </h4>
                    <p className='menuHeading' >{props.menuTitle}</p>
                </div>


            </div>


        </div>
    )
}

export default Menuheader;