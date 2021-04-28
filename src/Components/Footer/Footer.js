
import { FaPhoneAlt, FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    if (window.innerWidth > 900) {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-6 mt-3">
                        <div>
                            <h2 style={{ borderBottom: "1px solid #F4F7F7", padding: "20px", width: "70%", textAlign: "center", marginLeft: "120px" }}>Questions?</h2>
                        </div>
                        <div className="mt-3" style={{ textAlign: "center", marginLeft: "100px" }}>
                            <div className="mt-3">
                                <p className="contactHead">PHONE</p>
                                <p className="contactDetail mt-n4" style={{ marginLeft: "-90px" }}>+91 9890785456</p>
                            </div>
                            <div>
                                <p className="contactHead" style={{ marginLeft: "-160px" }}>EMAIL</p>
                                <p className="contactDetail mt-n4" style={{ marginLeft: "20px" }}>anand.mohatta@gmail.com</p>
                            </div>
                            <div>
                                <p className="contactHead">SOCIAL</p>
                                <p className="contactDetail mt-n4" style={{ marginLeft: "10px" }}>
                                    <FaFacebookSquare className="mr-3" style={{ height: "40px", width: "40px", marginLeft: "-65px" }} />
                                    <FaInstagramSquare className="mr-3" style={{ height: "40px", width: "40px" }} />
                                    <FaTwitter className="mr-3" style={{ height: "40px", width: "40px" }} />
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <h2 style={{ borderBottom: "1px solid #F4F7F7", padding: "20px", width: "70%", textAlign: "center" }}>Navigation</h2>
                        <div className="mt-3" style={{ marginLeft: "330px" }}>
                            <p className="footerNav" style={{ marginLeft: "-160px" }}>Home</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>About Us</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Services</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Gallery</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Contact Us</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Covid-19</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className="footer" style={{marginTop: "50vh"}}>
                <div className="row">
                    <div className="col-6 mt-3">
                        <div>
                            <h2 style={{ borderBottom: "1px solid #F4F7F7", padding: "20px", width: "70%", textAlign: "center", marginLeft: "50px" }}>Questions?</h2>
                        </div>
                        <div className="mt-3" style={{ textAlign: "center", marginLeft: "100px" }}>
                            <div className="mt-3">
                                <p className="contactHead">PHONE</p>
                                <p className="contactDetail mt-n4" style={{ marginLeft: "-90px" }}>+91 9890785456</p>
                            </div>
                            <div>
                                <p className="contactHead" style={{ marginLeft: "-160px" }}>EMAIL</p>
                                <p className="contactDetail mt-n4" style={{ marginLeft: "-45px" }}>anand.mohatta@gmail.com</p>
                            </div>
                            <div>
                                <p className="contactHead">SOCIAL</p>
                                <p className="contactDetail mt-n4" style={{ marginLeft: "10px" }}>
                                    <FaFacebookSquare className="mr-3" style={{ height: "40px", width: "40px", marginLeft: "-65px" }} />
                                    <FaInstagramSquare className="mr-3" style={{ height: "40px", width: "40px" }} />
                                    <FaTwitter className="mr-3" style={{ height: "40px", width: "40px" }} />
                                </p>
                            </div>
    
                        </div>
                    </div>
                    <div className="col-6 mt-3">
                        <h2 style={{ borderBottom: "1px solid #F4F7F7", padding: "20px", width: "70%", textAlign: "center" }}>Navigation</h2>
                        <div className="mt-3" style={{ marginLeft: "200px" }}>
                            <p className="footerNav" style={{ marginLeft: "-160px" }}>Home</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>About Us</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Services</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Gallery</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Contact Us</p>
                            <p className="footerNav mt-n4" style={{ marginLeft: "-160px" }}>Covid-19</p>
                        </div>
    
                    </div>
    
                </div>
            </div>
        )
    }
}

export default Footer;