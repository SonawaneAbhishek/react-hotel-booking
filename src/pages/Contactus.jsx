import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menuheader from '../components/Menuheader';
import contactimg from "../assets/contactus.jpg";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


function Contactus() {
  const navigate = useNavigate();

  const myStyle = {
    padding: "15px"
  }

  const myDivision = {
    gap: "30px"
  }

  const [userData, setUserData] = useState({ fullName: "", email: "", phone: "", message: "", subject: "" });

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await res.json();
      // console.log(data);
      // setUserData(data);
      setUserData({ ...userData, fullName: data.fullName, email: data.email, phone: data.phone })

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
      navigate('/signin');
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    userContact();
  }, []);



  //store dtata in states

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  }
  
  const contactForm = async (e) => {
    e.preventDefault();

    const { fullName, email, phone, message, subject } = userData;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName, email, phone, message, subject
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      alert("Please Fill all the fields");

    } else {
      swal("Message Sent Succesfully","","success")
      setUserData({ ...userData, message: "", subject: "" });
    }
  }

  return (


    <div>
      <Navbar />
      <Menuheader menuTitle="Contact Us" />
      <br />

      <div className='container d-flex my-5' style={myDivision}>

        <div className="col-md-6">
          <h2>Let's Start to Give Us a Message and Contact With Us</h2><br />
          <img style={{ width: "100%", borderRadius: "50px" }} class="img-fluid" src={contactimg} alt="" />
        </div>

        <div className="container col-md-6 my-5">
          <Form method='POST' style={{ padding: "50px", backgroundColor: "#F5F5F5" }}>
            <Row>
              <Col>
                <Form.Control id='fullName' style={myStyle} required
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputs}
                  placeholder="Name" />
              </Col>
              <Col>
                <Form.Control id='email' style={myStyle} required
                  name="email"
                  value={userData.email}
                  onChange={handleInputs}
                  placeholder="Email" />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control id='phone' style={myStyle} required
                  name="phone"
                  value={userData.phone}
                  onChange={handleInputs}
                  placeholder="Phone" />
              </Col>
              <Col>
                <Form.Control style={myStyle} required
                  name="subject"
                  value={userData.subject}
                  onChange={handleInputs}
                  placeholder="Your Subject" />
              </Col>
            </Row>
            <br />
            <Row>
              <div className="form-group">
                <textarea
                  placeholder="Your Message" required
                  name="message"
                  value={userData.message}
                  onChange={handleInputs}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
            </Row>
            <br />
            {/* <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Row>
              <Button variant="primary" style={{ padding: "10px" }} onClick={contactForm} type="submit">
                Send Your Message
              </Button>
            </Row>
          </Form>

        </div>



      </div>
      <Footer />
    </div>
  )
}

export default Contactus;