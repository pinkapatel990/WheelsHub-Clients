import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AppConfig from "../../constants/AppConfig";
import './index.mudel.css'
import FetchApi from "../../constants/FetchApi";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setScrolled] = useState(false)
    const [istoken, setIstoken] = useState(false)
    const [loginUserName, setLoginUserName] = useState("")


    const DOMAIN = AppConfig.SUB_DOMAIN

    const cookieValue = Cookies.get('LTK');

    console.log("My current login cookies", cookieValue)
    const handelUserLoginOrNot = async () => {
        if (cookieValue) {
            const myRes = await FetchApi("check-login", "", {
                method: "GET",
                headers: {
                    "token": cookieValue
                }
            })
            setLoginUserName(myRes.fname)
            console.log("my login token", myRes.fname)
            if (myRes.status == "ok") {
                setIstoken(true)

            } else {
                setIstoken(false)
            }
        } else {
            setIstoken(false)
        }
    }

    useEffect(() => {
        handelUserLoginOrNot()
    }, []);

    // useEffect(() => {
    //     const handlerScroll = () => {
    //         if (window.pageYOffset > 100) {

    //             setScrolled(true)
    //         } else {
    //             setScrolled(false)

    //         }
    //     }

    //     window.addEventListener("scroll", handlerScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handlerScroll);
    //     };
    // }, []);

    const handlerLogOutUser = async () => {
        console.log("logout")
        // if (cookieValue) {
            const userLogOut = await FetchApi("user-logout", "", {
                method: "GET",
                // headers: {
                //     "token": cookieValue
                // }
            })
            console.log("logout===>",userLogOut);
            if (userLogOut.status === 200) {
                setIstoken(false)
                Cookies.remove("LTK");
                window.location.href = DOMAIN + "login";
            }
            console.log("my logOut data", userLogOut.status)
        // }

    }

    const location = useLocation();

    // Function to determine if a link is active
    // console.log("my path ", location);
    const isLinkActive = (path) => {
        return location.pathname === path;
    };
    return (
        <>
          
            <nav className="navbar navbar-expand-lg  fixed-top bg-black">


                <div className="container">
                    <Link to="/" className="navbar-brand title-bar" >
                        <img src="icons/logo4.jpeg" alt="" style={{ width: "200px",marginLeft:"1rem" }} className="img-icon" />
                        {/* WheelsHub */}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >


                        <span className="navbar-toggler-icon">
                            <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                            <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }} ></div>
                            <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                        </span>
                        {/* // } */}
                    </button>


                    <div className="collapse navbar-collapse" id='navbarNav'>
                        <div className="mx-auto" ></div>
                        <ul className='navbar-nav ms-auto'  >
                            <li className={isLinkActive('/') ? 'active' : ''} >
                                <Link to="/" className={` ${isScrolled ? "nav-link bg-light" : "nav-link text-white"}`}>Home</Link>
                            </li>
                            <li className={isLinkActive('/cars-list') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                                <Link to="/cars-list" className="nav-link text-white">Fleet</Link>

                            </li>
                            <li className={isLinkActive('/gallery') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                                <Link to="/gallery" className="nav-link text-white">Gallary</Link>

                            </li>
                            {/* <li className={isLinkActive('/team') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                                <Link to="/team" className="nav-link text-white">Team</Link>
                            </li> */}
                            <li className={isLinkActive('/faq') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                                <Link to="/faq" className="nav-link text-white">FAQ</Link>
                            </li>

                            <li className={isLinkActive('/about-us') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                                <Link to="/about-us" className="nav-link text-white">About</Link>
                            </li>
                            <li className={isLinkActive('/contact-us') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                                <Link to="/contact-us" className="nav-link text-white">Contact Us</Link>
                            </li>


                            {/* <li className={isLinkActive('/h') ? 'active' : ''} style={{ paddingLeft: "1rem" }}>
                               <Link to="http://localhost:3001/" className="nav-link text-white">Drive</Link>
                            </li> */}
                            {!istoken ?
                                <li >

                                    <Link to="/login" className="nav-link "  >
                                        <img src="p2.png" alt="" style={{ width: "22px" }} /></Link>


                                </li>
                                :
                                <li className='' id="item-menu">
                                    <li className="nav-link dropdown-toggle text-white mx-2 " >
                                        <img src="p2.png" alt="" style={{ width: "32px" }} className=" mx-2" />{loginUserName}</li>
                                    <ul id="submenu" className="my-dropdown">
                                        <li><Link to="/my-account" className="profile-item" > <i className="fas fa-user mx-2" />Account</Link></li>
                                        {/* <li><Link className="profile-item" > <i className="fas fa-users mx-2" style={{ margin: "0px" }} />Teams</Link></li> */}
                                        <li><Link to="/car-booking-status" className="profile-item" > <i className="fas fa-bus mx-2" style={{ margin: "0px" }} />Your Trip</Link></li>
                                        <li><Link className="profile-item" onClick={handlerLogOutUser}> <i className="fas fa-sign-out-alt mx-2" style={{ margin: "0px" }} /> SingOut</Link></li>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Header;