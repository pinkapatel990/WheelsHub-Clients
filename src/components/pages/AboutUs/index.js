import Footer from '../../Footer'
import './aboutUs.css'
import { Link } from 'react-router-dom'
import AboutMain from "../../../images/about/about-main.jpg";
import Box1 from "../../../images/about/icon1.png"
import Box2 from "../../../images/about/icon2.png";
import Box3 from "../../../images/about/icon3.png";
import PlanTrip from '../../PlanTrip';


const AboutUs = () => {

    return (
        <>
            <div className='w-100  about-screen'>
                <div className="bgImage">
                    <ul>
                        <h2>ABOUT</h2>
                        <Link to="/">Home </Link> <Link to="/about">/About</Link>
                    </ul>


                </div>
                {/* <div className=' about-us'>
                    <h3>About us</h3>
                    <div className='first-car'>
                        <div className='img'>
                            <img src="about-.jpg" alt="" />
                        </div>
                        <div className='first-car-lines'>
                            <h4>Welcome to Our GoCarRatanls</h4>
                            <p>Hello Welcome to GoCarRantals We take pride in providing exceptional car rental services that cater to
                                all your transportation needs.</p>
                            <p>At GoCarRantals, we understand the importance of a seamless travel experience. With our
                                diverse fleet of well-maintained vehicles, you can choose the perfect ride for your journey.</p>
                            <p>Our team of dedicated professionals is committed to delivering top-notch customer service. From the moment
                                you contact us to the end of your rental, we're here to assist you every step of the way.</p>
                        </div>
                    </div>
                </div>
                <div className='second-car-screen'>
                    <div className='car-lines'>
                        <p>Safety and comfort are our priorities. Our vehicles undergo rigorous inspections to ensure they meet the highest
                            industry standards, giving you peace of mind during your travels.</p>
                        <p>Whether you're planning a family vacation, a business trip, or just need a temporary set of wheels, GoCarRantals
                            has the ideal solution for you.</p>
                        <p>We believe in transparency and fair pricing. With no hidden fees and competitive rates, you can trust us to offer
                            a budget-friendly rental experience.</p>
                    </div>
                    <div className='cars-img ' >
                        <img src="car1.jpeg" alt="" />
                    </div>
                </div> */}

                <section className="container about-page">
                    {/* <HeroPages name="About" /> */}
                    <div className="container">
                        <div className="about-main">
                            <img
                                className="about-main__img"
                                src={AboutMain}
                                alt="car-renting"
                            />
                            <div className="about-main__text">
                                {/* <h3>About Company</h3> */}
                                <h2>You start the engine and your adventure begins</h2>
                                <p>
                                    Welcome to WheelsHub we are committed  to providing you with the ultimate car rental experience.
                                     Whether you're traveling for business or pleasure, our goal is to make your journey as smooth and
                                      enjoyable as possible.
                                </p>
                                <div className="about-main__text__icons">
                                    <div className="about-main__text__icons__box">
                                        <img src={Box1} alt="car-icon" />
                                        <span>
                                            <h4>20+</h4>
                                            <p>Car Types</p>
                                        </span>
                                    </div>
                                    <div className="about-main__text__icons__box">
                                        <img src={Box2} alt="car-icon" />
                                        <span>
                                            <h4>85+</h4>
                                            <p>Rental Drivers</p>
                                        </span>
                                    </div>
                                    <div className="about-main__text__icons__box">
                                        <img src={Box3} alt="car-icon" className="last-fk" />
                                        <span>
                                            <h4>75+</h4>
                                            <p>Daily Booking</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <PlanTrip />
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
export default AboutUs