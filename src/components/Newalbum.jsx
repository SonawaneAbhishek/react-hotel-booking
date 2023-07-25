import React from 'react'
import { facilityData } from '../data/Facilitydata';

function Newalbum() {
    return (
        <div className='container my-5'>
            <div className="row">
                {facilityData.map((facility) => (
                    <div className="col-lg-4 col-md-6 mb-5 px-4">
                        <div className="bg-white rounded shadow p-4 border-top border-4 border-dark pop">
                            <div className="d-flex align-items-center mb-2">
                                <img src="https://hotelgalaxykarachi.com/wp-content/uploads/2017/08/icon-checked-grey.png" width="40px" />
                                <h5 className="m-0 ms-3">{facility.title}</h5>
                            </div>
                            <p>
                                {facility.details}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Newalbum