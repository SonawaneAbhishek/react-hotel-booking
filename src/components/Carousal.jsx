import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/header.jpg";
import img2 from "../assets/header2.jpg"
import img3 from "../assets/header3.jpg"
import "./Carousal.css";


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
    
  );
}

export default Carousal;