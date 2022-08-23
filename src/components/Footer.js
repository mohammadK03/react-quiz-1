import { BsWhatsapp } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer" id="Footer" dir="ltr">
            <p>@2021 Powered by Mohammad Hosein Kazemi</p>
            <div className="footer-media">
                <BsWhatsapp/>
                <FaTelegramPlane />
            </div>
        </div>
    );
}
 
export default Footer;