import React from 'react'
import img1 from "../assets/about1.webp";


function Aboutright() {
    return (
        <div>
            <div className="container my-5">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1"> <span className="text-body-secondary">Our way of being.</span></h2>
                        <p className="lead">At Abhi's Hotel Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet.</p>
                    </div>
                    <div className="col-md-5">

                        <img src={img1} width="100%" height="100%" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutright;