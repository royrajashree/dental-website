import React from 'react';
import statelessComponents from '../../Components';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerBackground: "whiteBackground"
        }
    }

    render() {
        if (window.innerWidth > 900) {
            return (
                <div>
                    <div style={{ top: 0, position: 'sticky', zIndex: 9999, width: "100vw" }}>
                        <statelessComponents.Header background={this.state.headerBackground} />
                    </div>
                    <div className="aboutUsSubHeader">
                        <p className="clinicName">DR. MOHATTA'S MULTI SPECIALITY DENTAL CLINIC <br /> &amp; MICRO DENTISTRY CENTER</p>
                        <p className="tagLine">Special Attention - Surgical Microscope Assisted Root Canal Treatment<br />(PAGE UNDER CONSTRUCTION)</p>
                    </div>

                    {/* <statelessComponents.AboutIntro />
                    <hr style={{ marginTop: "100px" }} />
                    <ScrollAnimation animateIn="animate__animated animate__slideIn">
                        <statelessComponents.ServicesIntro />
                    </ScrollAnimation>
                    <hr style={{ marginTop: "150px" }} />
                    <div style={{ height: '75vh', width: "100%", marginTop: "100px", marginBottom: "200px" }}>
                        <statelessComponents.Location />
                    </div> */}
                    <statelessComponents.Footer />
                </div>
            )
        } else {
            return (
                <div style={{ overflowX: "hidden" }}>
                    <div style={{ top: 0, position: 'fixed', width: "100%", zIndex: 9999, flexGrow: "1" }}>
                        <statelessComponents.Header background="whiteBackground" />
                    </div>
                    <div className="aboutUsSubHeader">
                        <p className="clinicName">DR. MOHATTA'S MULTI SPECIALITY DENTAL CLINIC <br /> &amp; MICRO DENTISTRY CENTER</p>
                        <p className="tagLine">Special Attention - Surgical Microscope Assisted Root Canal Treatment<br />(PAGE UNDER CONSTRUCTION)</p>
                    </div>
                    {/* <statelessComponents.AboutIntro />
                    <hr style={{ marginTop: "55vh" }} />
                    <ScrollAnimation animateIn="animate__animated animate__slideIn">
                        <statelessComponents.ServicesIntro />
                    </ScrollAnimation>
                    <hr style={{ marginTop: "55vh" }} />
                    <div style={{ height: '75vh', marginTop: "100px", marginBottom: "200px" }}>
                        <statelessComponents.Location />
                    </div>*/}
                    <statelessComponents.Footer />
                </div>
            )
        }

    }
}
export default About;