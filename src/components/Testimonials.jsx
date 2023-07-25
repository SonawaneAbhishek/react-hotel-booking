import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import "./Testimonial.css"

function Testimonials() {
    return (
        <div className="testimonial ">
            <MDBContainer className="py-5  testimonialHeading ">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10" xl="8" className="text-center">
                        <h3 className="mb-4">OUR GUESTS LOVE US</h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0 testText">
                        What our guests are saying about us
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center">
                    <MDBCol md="4" className="mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                className="rounded-circle shadow-1-strong"
                                width="150"
                                height="150"
                            />
                        </div>
                        <h5 className="mb-3">Maria Smantha</h5>
                        <h6 className="text-primary mb-3">Nice Place</h6>
                        <p className="px-xl-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            Fantastic location in a historic renovated monastery in the heart of the India. Staff were helpful and knowledgeable and everything in easy walking distance.
                        </p>
                        <MDBTypography
                            listUnStyled
                            className="d-flex justify-content-center mb-0"
                        >
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon
                                    fas
                                    icon="star-half-alt"
                                    size="sm"
                                    className="text-warning"
                                />
                            </li>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                className="rounded-circle shadow-1-strong"
                                width="150"
                                height="150"
                            />
                        </div>
                        <h5 className="mb-3">Lisa Cudrow</h5>
                        <h6 className="text-primary mb-3">Perfect</h6>
                        <p className="px-xl-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            The owner and staff were extremely helpful and kind and took time to ensure that we had extra information on things to do in the area and places to visit.
                        </p>
                        <MDBTypography
                            listUnStyled
                            className="d-flex justify-content-center mb-0"
                        >
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol md="4" className="mb-5 mb-md-0">
                        <div className="d-flex justify-content-center mb-4">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                className="rounded-circle shadow-1-strong"
                                width="150"
                                height="150"
                            />
                        </div>
                        <h5 className="mb-3">John Smith</h5>
                        <h6 className="text-primary mb-3">Good Choice</h6>
                        <p className="px-xl-3">
                            <MDBIcon fas icon="quote-left" className="pe-2" />
                            Extremely nice environment, the room was great, the service was awesome, really helpful and great service I'll visit them again in the near future.
                        </p>
                        <MDBTypography
                            listUnStyled
                            className="d-flex justify-content-center mb-0"
                        >
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon fas icon="star" size="sm" className="text-warning" />
                            </li>
                            <li>
                                <MDBIcon far icon="star" size="sm" className="text-warning" />
                            </li>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default Testimonials;