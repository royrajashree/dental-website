import statelessComponents from '../index';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Header = (props) => {
    return (
        <div className={props.background}>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <statelessComponents.Logo />
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="row">
                        <div className="ml-auto mt-3 mr-3"><FaPhoneAlt color="#646363" /><span className="headerContactDetails ml-2">+91 9890785456</span></div>
                        <div className="mt-3"><FaEnvelope color="#646363" /><span className="ml-2 mt-4 mr-5 headerContactDetails">anand.mohatta@gmail.com</span></div>
                    </div>
                    <div className="row">
                        <statelessComponents.TabsComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;