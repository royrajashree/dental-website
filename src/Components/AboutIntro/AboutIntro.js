import { Link, HashRouter } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutIntro = () => {
    return (
        <div style={{ marginTop: "75vh", height: "600px" }}>
            <div className="row">
                <div className="col-md-5 col-sm-6 d-flex justify-content-center" style={{ marginTop: "200px" }}>
                    <img src={process.env.PUBLIC_URL + 'assets/images/about.jpg'} width="400" height="400" style={{ borderRadius: "50%" }} />
                </div>
                <div className="col-md-7 col-sm-6 d-flex justify-content-center align-items-center" style={{ marginTop: "150px" }}>
                    <div>
                        <ScrollAnimation animateIn="animate__animated animate__slideInUp">
                            <h3 className="aboutName">DR. ANAND MOHATTA</h3>
                        </ScrollAnimation>
                        <ul style={{ marginTop: "24px" }}>
                            <li>Endodontist Specialist</li>
                            <li>Root Canal Specialist</li>
                            <li>Cosmetic Dentist Specialist</li>
                            <li>Restorative Dentist Implantologist</li>
                        </ul>
                        <HashRouter>
                            <Link to="/about">
                                <button className="knowMoreBtn" style={{ transform: "translateX(110%)" }}>KNOW MORE</button>
                            </Link>
                        </HashRouter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro;