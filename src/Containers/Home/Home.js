import React from 'react';
import statelessComponents from '../../Components';
import ScrollAnimation from 'react-animate-on-scroll';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerBackground: "transparentBackground"
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        console.log("Scrolling", window.pageYOffset);
        if (window.pageYOffset > 20) {
            this.setState({ headerBackground: "whiteBackground" });
        } else {
            this.setState({ headerBackground: "transparentBackground" });
        }
    }

    render() {
        if (window.innerWidth > 900) {
            return (
                <div className="backgroundImage">
                    <div>
                        <div style={{ top: 0, position: 'sticky', zIndex: 9999, width: "100vw" }}>
                            <statelessComponents.Header background={this.state.headerBackground} />
                        </div>
                        <statelessComponents.AboutIntro />
                        <hr style={{ marginTop: "100px" }} />
                        <ScrollAnimation animateIn="animate__animated animate__slideIn">
                            <statelessComponents.ServicesIntro />
                        </ScrollAnimation>
                        <hr style={{ marginTop: "150px" }} />

                        {/* <statelessComponents.Reviews /> */}
                        <div style={{ height: '75vh', width: "100%", marginTop: "100px", marginBottom: "200px" }}>
                            {/* <div className="row d-flex">    
                                <div className="col-md-6 col-sm-12">
                                    <statelessComponents.Location />
                                </div>
                                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                                    <h2>Some huge text</h2>
                                </div>
                            </div> */}
                            <statelessComponents.Location />
                        </div>
                        <statelessComponents.Footer />
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{overflowX:"hidden"}}>
                    <div style={{ top: 0, position: 'fixed', width: "100%", zIndex: 9999, flexGrow: "1" }}>
                        <statelessComponents.Header background="whiteBackground" />
                    </div>
                    <div style={{marginTop: "15vh"}} className="backgroundImage"></div>
                    <statelessComponents.AboutIntro />
                    <hr style={{ marginTop: "55vh" }} />
                    <ScrollAnimation animateIn="animate__animated animate__slideIn">
                        <statelessComponents.ServicesIntro />
                    </ScrollAnimation>
                    <hr style={{ marginTop: "55vh" }} />
                    {/* <statelessComponents.Reviews /> */}
                    <div style={{ height: '75vh', marginTop: "100px", marginBottom: "200px" }}>
                        {/* <div className="row d-flex">    
                                <div className="col-md-6 col-sm-12">
                                    <statelessComponents.Location />
                                </div>
                                <div className="col-md-6 col-sm-12 d-flex justify-content-center">
                                    <h2>Some huge text</h2>
                                </div>
                            </div> */}
                        <statelessComponents.Location />
                    </div>
                    <statelessComponents.Footer />
                </div>
            )
        }

    }
}
export default Home;