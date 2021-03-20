import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import HeaderBlack from '../HeaderBlack/HeaderBlack';
import fakeDataVeh from '../../fakeDataTransportInfo';
import { useParams } from 'react-router-dom';
import TransportDetails from '../TransportDetails/TransportDetails';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';

const HotelPage = () => {
    const transports = fakeDataVeh;

    const { id } = useParams();
    const filteredVeh = transports.filter(transport => parseInt(transport.VId) === parseInt(id));


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container bg="light">
            <HeaderBlack></HeaderBlack>
            <Container>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <h5 className="font-weight-bold">Travel With</h5>
                        {
                            filteredVeh.map(vehDetails => <TransportDetails key={vehDetails.key} vehDetails={vehDetails}></TransportDetails>)
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