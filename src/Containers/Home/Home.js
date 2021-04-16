import React from 'react';
import statelessComponents from '../../Components';

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
        if (window.pageYOffset > 350) {
            this.setState({ headerBackground: "whiteBackground" });
        } else {
            this.setState({ headerBackground: "transparentBackground" });
        }
    }

    render() {
        return (
            <div className="backgroundImage">
                <div>
                    <div style={{ top: 0, position: 'sticky', zIndex: 9999 }}>
                        <statelessComponents.Header background={this.state.headerBackground} />
                    </div>
                    <statelessComponents.AboutIntro />
                    <statelessComponents.ServicesIntro />
                    {/* <div style={{marginTop: "100px", position: "fixed", top: "90%"}}>
                    <img src={process.env.PUBLIC_URL + 'assets/images/teeth.jpg'} width="100%" height="500px" />
                </div> */}
                    <div style={{ marginTop: "100px", height: "400px" }}>
                        {/* <img src={process.env.PUBLIC_URL + 'assets/images/teeth.jpg'} width="100%" height="500px" /> */}
                    </div>
                    <statelessComponents.Footer />
                </div>
            </div>
        )
    }
}
export default Home;