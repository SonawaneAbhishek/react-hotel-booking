import React from 'react'
import Navbar from '../components/Navbar';
import Aboutright from '../components/Aboutright';
import Aboutleft from '../components/Aboutleft';
import Footer from '../components/Footer';
import img3 from "../assets/about3.webp";
import img4 from "../assets/aboutpage.jpg";
import Menuheader from '../components/Menuheader';
import Testimonials from '../components/Testimonials';


function About() {
    return (
        <div >
            <Navbar />
            <Menuheader menuTitle="About Us"  />
            <hr/>
            
            {/* <center><h1 className='pageHeading'>ABOUT US<hr className='line-hr' /></h1></center> */}
            <Aboutright />
            <Aboutleft />
            <div className="container my-5">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1"> <span className="text-body-secondary">Our way of being.</span></h2>
                        <p className="lead">At Abhi's Hotel Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet.</p>
                    </div>
                    <div className="col-md-5">

                        <img src={img3} width="100%" height="100%" alt="" srcset="" />
                    </div>
                </div>
            </div>
            
            <Testimonials/>
            <Footer />

        </div>
    )
}

export default About;