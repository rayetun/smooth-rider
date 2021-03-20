import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './TransportDetails.css';

const HotelDetails = (props) => {
    const { VId, img, vehName, price,} = props.vehDetails;
    
    return (
        <div className="my-5 d-flex justify-content-between align-items-center">
            <div className="col-md-5">
                <img src={img} alt="transport" className="img-fluid " />
            </div>
            <div className="col-md-7 transport-info">
                <h5>{vehName}</h5>
                <div className="price-rating d-flex">
                    <div className="price">
                        <h6><span className="font-weight-bold">${price}</span></h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;