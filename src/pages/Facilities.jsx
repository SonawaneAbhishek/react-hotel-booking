import React from 'react'
import Album from '../components/Album'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Menuheader from '../components/Menuheader';
import Newalbum from '../components/Newalbum';

function Facilities() {
  return (
    <div>
        <Navbar/>
        <Menuheader menuTitle="Facilities" />
        {/* <center><h1>FACILITIES<hr className='line-hr' /></h1></center> */}
        {/* <Album/> */}
        <Newalbum/>
        <Footer/>
    </div>
  )
}

export default Facilities;