import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import bgImage from '../../images/hero-bg-2.jpg';
import { useHistory, useParams } from 'react-router-dom';
import fakeDataTransport from '../../fakeDataTransport';
import './BookingPage.css'
import { useForm } from 'react-hook-form';
import GoogleMap from '../GoogleMap/GoogleMap';

const BookingPage = () => {
    const { id } = useParams();

    const bookingPlace = fakeDataTransport.find(place => parseInt(place.id) === parseInt(id));
    const { register, errors } = useForm();
    const history = useHistory();
    const handleProceedBooking =()=>{
        history.push(`/vehPage/${id}`)
    }

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})` }} className="home">
            <Header></Header>
            <Container>
                <div className="d-flex justify-content-center align-items-center my-5">
                <div className="col-md-4">
                        <div className="row">
                            <form className="bookingPage-form" onSubmit={handleProceedBooking}>
                            <h1>Select Your Destination</h1>
                                <label>Origin</label>
                                <input name="origin" placeholder="Travel From" ref={register({ required: true })} />
                                {errors.origin && <span className="error">Origin is required</span>}

                                <label>Destination</label>
                                <input name="destination" placeholder="Travel To" ref={register({ required: true })} />
                                {errors.destination && <span className="error">Destination is required</span>}

                                <div className="d-flex justify-content-between">
                                    <div className="mr-2">
                                        <label>From</label>
                                        <input name="from" type="date" ref={register({ required: true })} />
                                        {errors.from && <span className="error">Date is required</span>}
                                    </div>
                                    <div>
                                        <label>To</label>
                                        <input name="to" type="date" ref={register({ required: true })} />
                                        {errors.to && <span className="error">Date is required</span>}
                                    </div>
                                </div>
                                <input type="submit"  variant="warning" value="Start Booking" className="my-3 btn-block font-weight-bold"/>
                            </form>
                        </div>
                    </div>
                    <div className="offset-md-1 col-md-7">
                        <GoogleMap></GoogleMap>
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default BookingPage;