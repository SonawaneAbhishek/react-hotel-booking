import React from 'react'
import './Header.css';
// import img1 from "../assets/header.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from "react-date-range";
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import Dropdown from 'react-bootstrap/Dropdown';
import Carousal from './Carousal';
import introimage from "../assets/about2.avif";
import { Link, useNavigate } from 'react-router-dom';



function Header() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      // endDate: null, // te titha continous yet hota mhanun it can ccaues error so gave new date
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [openDate, setOpenDate] = useState(false);

  const navigate = useNavigate();

  const handleCheck = () => {
    navigate("/rooms", { state: { date } });
    // navigate("/room-detail", { state: { date } });
  }

  return (

    <div>

      <div className='header'>
        <Carousal />

        <div className="headerSearch">

          {/* <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faBed} className='headerIcon' />
                      <input type="text" placeholder='Where are u going' className='headerInput' />
                    </div> */}
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />

            <span onClick={() => setOpenDate(!openDate)} className='HeaderSearchtext' >{`${format(date[0].startDate, "MMMM dd, Y")}  - ${format(
              date[0].endDate,
              "MMMM dd, Y"
            )}`}</span>

            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              minDate={new Date()}
              ranges={date}
              className='date'
            />}
          </div>


          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <select className='dropdownMenu' style={{ padding: "8px", border: "none", }}>
              <option  value="selct">Occupancy</option>
              <option value= "1">1</option>
              <option value= "2">2</option>
              <option value= "3">3</option>
              <option value= "more">More Than 3</option>
            </select>


            <div className="headerSearchItem">
              <button type="button" class="btn btn-outline-dark buton" onClick={handleCheck}>Check Availability</button>
              {/* <Link to="/rooms" ><button type="button" class="btn btn-outline-dark buton" >Check Availability</button></Link>  */}
            </div>
          </div>
        </div >
      </div>
      

      <div style={{ backgroundColor: "#f4f1ec" }}>
        <div style={{ paddingTop: "100px" }} className="col-md-12 d-flex container ">
          <div className="col-md-6 ">
            <h1 style={{ color: "#858a99", fontFamily: "'Nunito', sans-serif",fontSize:"32px" }} className='p-0 '>HOTEL ABHISHEK SINCE 2001</h1>
            <h4 style={{ color: "#858a99", fontFamily: "'Lato', sans-serif",fontSize:"18px",lineHeight:"28px" }}>High quality accommodation services</h4>
            <br />
            <p style={{ fontFamily:"'Lato', sans-serif",fontSize:"15px",color: "#858a99" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit voluptate fugit numquam est. Obcaecati, placeat. Enim ipsam maiores illo ea rerum delectus eius saepe inventore laborum ducimus animi error, reiciendis exercitationem, eligendi laudantium eveniet a, deserunt nam magni labore harum quis. Quaerat iure sint voluptates necessitatibus fugit soluta quia nesciunt amet ipsa reiciendis, enim fuga id quis ex exercitationem ullam facere culpa nisi delectus eum! Commodi unde atque non recusandae, fugiat ea, exercitationem voluptates doloremque, voluptate omnis cupiditate. Ad corporis quisquam alias sit, explicabo corrupti rerum cupiditate voluptatibus quis ullam. Earum est quae sequi reprehenderit nihil eius? Provident, libero.</p>
            <Link to="/about"><button className="btn btn-outline-warning">More Details</button></Link>
          </div>
          <div style={{ paddingLeft: "30px", paddingBottom: "80px", marginTop: "20px" }} className="col-md-6">
            <img src={introimage} className="img-fluid" style={{ width: "90%" }} alt="intoImage" />
          </div>

        </div>
      </div>
      
      {/* our favourite rooms strats here */}
      <center><h1 className='my-5' style={{ fontFamily: "serif", color: "GrayText" }}>Our Favourite Rooms</h1><br /></center>










    </div>


  )
}

export default Header;