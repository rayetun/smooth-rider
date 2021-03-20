import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import bgImage from '../../images/hero-bg.jpg';
import Header from '../Header/Header';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import fakeDataTransport from '../../fakeDataTransport/travelMode'
import SingleTransport from '../SingleTransport/SingleTransport';
import { Link } from 'react-router-dom';

const Home = () => {
    const travelTransport= fakeDataTransport;
    const [transport, setPlace] = useState(travelTransport);

    const [content, setContent] = useState(transport[0]);
    const handletransportContent = (id) => {
        setContent(transport[id]);
    }
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})` }} className="home">
            <Container>
                <Header></Header>
                <Row>
                    <div className="d-flex justify-content-center align-items-center px-1">
                        <div className="col-md-12 slide">
                            <div className="row">
                                {
                                    transport.map(transport =>
                                        <SingleTransport transport={transport} key={transport.id} handletransportContent={handletransportContent}></SingleTransport>)
                                }
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;