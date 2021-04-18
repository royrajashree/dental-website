import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import ScrollAnimation from 'react-animate-on-scroll';

const Location = (props) => {
    return (
        <div className="row d-flex">
            <div className="col-md-6 col-sm-12">
                <Map
                    google={props.google}
                    zoom={13}
                    style={{ width: '100%', marginBottom: '400px', marginLeft: '10%', height: '75vh' }}
                    initialCenter={{ lat: 19.223468807494807, lng: 72.85724841170718 }}
                >
                    <Marker position={{ lat: 19.223468807494807, lng: 72.85724841170718 }} />
                </Map>
            </div>
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center" style={{ marginTop: "25vh" }}>
                <div>
                    <ScrollAnimation animateIn="animate__animated animate__slideInUp">
                        <h3 className="aboutName">LOCATION</h3>
                        <ul style={{ marginTop: "24px" }}>
                            <li>Sufficient parking space</li>
                            <li>Near Borivali East-West flyover</li>
                            <li>2 mins from the Railway Station</li>
                        </ul>
                    </ScrollAnimation>
                </div>
            </div>
        </div>

    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC9P7H6EnReVBQ-8K1Sr9Jr8MtTz0WGC9I'
})(Location);