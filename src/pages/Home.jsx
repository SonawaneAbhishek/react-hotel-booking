import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Carousal from '../components/Carousal';

import Roomcard from '../components/Roomcard';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/> 
        <Roomcard/>
        <Testimonials/>
        <Footer/>
        

    </div>
  )
}

export default Home;