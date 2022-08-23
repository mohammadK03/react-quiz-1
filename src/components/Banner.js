import { FaAngleRight } from "react-icons/fa";

import image from '../assets/images/illustration.svg'

const Banner = () => {
    return (
        <div id="banner" className="banner container">
            <div className="row">
                <div className="col-sm-6 col-xs-12 align-self-center content-col">
                    <h1>
                        سریع ترین و امن ترین<br />
                        پلتفرم برای سرمایه گذاری <br />
                        در ارز دیجیتال
                    </h1>

                    <p className="my-4">
                        خرید و فروش ارزهای دیجیتال، معتبر توسط ۱۰ میلیون کیف پول<br />
                        با بیش از ۳۰ میلیارد تراکنش.
                    </p>

                    <div className="try-for-free-btn">
                        <div className="d-flex justify-content-center align-items-center">
                            <FaAngleRight style={{ color: 'var(--light-blue)' }} />
                        </div>
                        <p className="mr-4">
                            رایگان امتحان کن
                        </p>
                    </div>

                </div>
                <div className="col-sm-6 display-none-sm-and-down">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Banner;