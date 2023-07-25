import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/header.jpg";
import img2 from "../assets/header2.jpg"
import img3 from "../assets/header3.jpg"
import "./Carousal.css";
// import React from 'react';
//   import {
//     MDBCarousel,
//     MDBCarouselItem,
//   } from 'mdb-react-ui-kit';



function Carousal() {
  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-100 img-caruosal"         
          src={img1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-100 img-caruosal2"        
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block mx-auto w-100 img-caruosal3"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


  
      // <MDBCarousel>
      //   <MDBCarouselItem
      //     className='w-100 d-block img-caruosal'
      //     itemId={1}
      //     src={img1}
      //     alt='...'
      //   />
      //   <MDBCarouselItem
      //     className='w-100 d-block img-caruosal2'
      //     itemId={2}
      //     src={img2}
      //     alt='...'
      //   />
      //   <MDBCarouselItem
      //     className='w-100 d-block img-caruosal3'
      //     itemId={3}
      //     src={img3}
      //     alt='...'
      //   />
      // </MDBCarousel>
    
  );
}

export default Carousal;