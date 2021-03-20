import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTransport.css'

const SingleTransport = (props) => {
    const { transportName, img, id } = props.transport;
    // console.log(props);
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-xs-12 my-5 single-place">
            <Link to={`/Login/${id}`} onClick={() =>{props.handletransportContent(props.id)}}>
                <img src={img} alt="" />
                <h3 className="place-name text-white ml-4">{transportName}</h3>
            </Link>
        </div>
    );
};

export default SingleTransport;