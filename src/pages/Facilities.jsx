import React from 'react'
import Album from '../components/Album'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Menuheader from '../components/Menuheader';
import Newalbum from '../components/Newalbum';

function Facilities() {

  return (
    <div>
      <Navbar />
      <Menuheader menuTitle="Facilities" />

      <div className="roomheading container my-5">
        <p className='text-center' style={{ color: "#EE786C" }}>FACILITIES</p>
        <h1 className='text-center' style={{ fontFamily: "Noto Serif ,serif", fontSize: "30px", fontWeight: "600" }}>Our Services & facilities</h1>
      </div>

      {/* <Album/> */}

      <Newalbum />
      <Footer />
    </div>
  )
}

export default Facilities;