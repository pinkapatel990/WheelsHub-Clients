import { useEffect, useState } from 'react';
import './sidenav.css';
import Updatepassword from '../pages/Updatepassword';
import MyAccount from '../pages/MyAccount';
import FetchApi from '../../constants/FetchApi';
import { Link } from 'react-router-dom';

const SideNavbar = (props) => {
    // console.log("My props ===>", props)
    // const userName = props.userName;
    // const userName = localStorage.getItem("user")

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [name, setName] = useState("");

    // Function to toggle the sidebar state (open/close)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [updateComponent, setUpdateComponent] = useState(false);
    const [updateAcount, setUpdateAccount] = useState(false)
    const handlerupdateAccount = () => {
        setUpdateAccount(true)
    }
    // const handleLinkClick = () => {
    //     setUpdateComponent(true);
    // };
    const handlerUserName = async () => {
        const data = await FetchApi("getuser-name", "", {
            method: "GET"
        })
        console.log("user name ==>", data.username);
        setName(data.username);
    }
    useEffect(() => {
        handlerUserName()
    })
    return (
        <>
            <div>
                <div>
                    <div
                        className={!isSidebarOpen ? `account-screen` : "account-div"}
                        id='account-div'>
                        {/* <button  onClick={toggleSidebar}>
                    &times;
                         </button> */}
                        <button
                            className="navbar-toggler side-nav"
                            onClick={toggleSidebar}
                        >
                            <span className="navbar-toggler-icon">
                                <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                                <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }} ></div>
                                <div className="line" style={{ backgroundColor: "rgb(226, 213, 213)" }}></div>
                            </span>

                        </button>

                        <div id='navbarNavSide'>

                            <div className='img-account'>
                                <div>
                                    <img src="all image/person.svg" alt="" style={{ width: "50px" }} />
                                    {/* <i class="bi bi-person"></i> */}
                                </div>
                                <div className='user-name'>

                                    <p>Registered</p>
                                    <h3>Hey {name}</h3>

                                </div>
                            </div>
                        </div>
                        <div className='nav-item' id="nav-item">
                            <li>
                                <a href="">Profile</a>
                            </li>
                            <div className='side-menu'>
                                <p className='item-sidenav'>
                                    <i className="fas fa-user mx-2" />
                                    <Link to='/my-account' onClick={handlerupdateAccount} >My account</Link>
                                </p>
                                <p className='item-sidenav'>
                                    <i className="fas fa-key mx-2" style={{ margin: "0px" }} />
                                    <Link  to='/update-password' >Update Password</Link>
                                </p>
                                <p className='item-sidenav'>
                                    <i className="fas fa-bus mx-2" style={{ margin: "0px" }} />
                                    <Link to="/car-booking-status" >Your Trip</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                {updateAcount && <div><MyAccount/></div>}
            </div>
                <div>
                {updateComponent&& <div> <Updatepassword/></div>}
                </div>  */}

            </div>
        </>
    )
}
export default SideNavbar;