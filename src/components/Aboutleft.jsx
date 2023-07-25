import React from 'react'
import img2 from "../assets/about2.avif";

function Aboutleft() {
  return (
    <div>
        <div className="container my-5">
                <div className="row featurette d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1"><span className="text-body-secondary">An international presence</span></h2>
                        <p className="lead">We are present in over 95 countries with ten distinctive brands. Together with our partners, we continue to develop new hotels and generate synergies to go much further.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        "
                        <img src={img2} width="100%" height="100%" alt="" srcset="" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Aboutleft;