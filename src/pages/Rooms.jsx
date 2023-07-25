import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menuheader from '../components/Menuheader';
import Allrooms from '../components/Allrooms';



function Rooms() {
  const roomStyle={
    
  }

  return (
    <div>
      <Navbar />
      <Menuheader menuTitle="Rooms" />
      <div className="roomheading container my-5">
        <p className='text-center' style={{color:"#EE786C"}}>ROOMS</p>
        <h1 className='text-center' style={{fontFamily:"Noto Serif ,serif" ,fontSize:"30px",fontWeight:"600"}}>Our Rooms & Rates</h1>
      </div>
      <Allrooms />

      <Footer />
    </div>
  )
}

export default Rooms;