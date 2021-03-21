import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
    return (
        <div style={{ height: '70vh', width: '100%',borderRadius:'10px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBiPegG4FfGshWYSBA4niaxJm9HbBJytro" }}
                defaultCenter={{lat:23.7805733,lng:90.2792392}}
                defaultZoom={10}
            >
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMap;