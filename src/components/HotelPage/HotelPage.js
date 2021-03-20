import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import fakeDataHotel from '../../fakeDataHotel';
import { useParams } from 'react-router-dom';
import HotelDetails from '../HotelDetails/HotelDetails';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';

const HotelPage = () => {
    const hotels = fakeDataHotel;

    const { id } = useParams();
    const filteredHotel = fakeDataHotel.filter(hotel => parseInt(hotel.hotelId) === parseInt(id));


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container bg="light">
            <HeaderBlack></HeaderBlack>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <h5 className="font-weight-bold">Travel With</h5>
                        {
                            filteredHotel.map(hotelDetails => <HotelDetails key={hotelDetails.key} hotelDetails={hotelDetails}></HotelDetails>)
                        }
                    </div>
                    <div className="offset-md-1 col-md-7">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default HotelPage;