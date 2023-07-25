import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Menuheader from '../components/Menuheader';
import contactimg from "../assets/contactus.jpg";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contactus() {

  const myStyle = {
    padding: "15px"
  }

  const myDivision={
    gap:"30px"
  }
  return (


    <div>
      <Navbar />
      <Menuheader menuTitle="Contact Us" />
      <br/>

      <div className='container d-flex my-5'style={myDivision}>

        <div className="col-md-6">
          <h2>Let's Start to Give Us a Message and Contact With Us</h2><br/>
          <img style={{ width: "100%", borderRadius: "50px" }}class="img-fluid"  src={contactimg} alt="" />
        </div>

        <div className="container col-md-6 my-5">
          <Form style={{ padding: "50px", backgroundColor: "#F5F5F5" }}>
            <Row>
              <Col>
                <Form.Control style={myStyle} required placeholder="Name" />
              </Col>
              <Col>
                <Form.Control style={myStyle} required placeholder="Email" />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control style={myStyle} required  placeholder="Phone" />
              </Col>
              <Col>
                <Form.Control style={myStyle} required placeholder="Your Subject" />
              </Col>
            </Row>
            <br />
            <Row>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                />
              </div>
            </Row>
            <br />
            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Row>
              <Button variant="primary" style={{padding:"10px"}} type="submit">
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