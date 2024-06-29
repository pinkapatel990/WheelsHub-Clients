import './my-account.css'
import SideNavbar from "../../SideNavber";
import { useEffect, useState } from 'react';
import FetchApi from '../../../constants/FetchApi';
import SuccessPopup from '../../Success';
import emailVaidation from '../../../utils/emailValidation';

const MyAccount = (props) => {
    const [isInput, setIsInput] = useState(false)
    const [userData, setUserData] = useState([])
    const [useEmail, setUserEmail] = useState("")
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("")
    const [success, setSuccess] = useState(false)
    const [hideBtn, setHideBtn] = useState(false)
    const [emailChange, setEmailChange] = useState(false)
    const [hideChange, setHideChange] = useState(false)
    const [newEmail, setNewEmail] = useState("")
    const [newEmailError, setNewEmailError] = useState("")
    const [ReEnterEmail, setReEnterEmail] = useState("")
    const [ReEnterEmailError, setReEnterEmailError] = useState("")
    let isAllDataValid = true;
    const handleraAccountupdate = () => {
        console.log("update")
        setIsInput(true)
        setHideBtn(true)
    }
    const handlerCancel = () => {
        setIsInput(false)
        setHideBtn(false)
        setEmailChange(false)
        setHideChange(false)
    }
    const handleGanderChange = (evet) => {
        setGender(evet.target.value)
        console.log("my gender is ", gender);
    }
    useEffect(() => {
        handlerUserProfile()
    }, [])
    const handlerUserProfile = async () => {
        try {

            const user = await FetchApi("user-profile", "", {
                method: "GET"
            })
            // console.log("my user data",user);
            if (user.status === 200) {

                setUserData(user.data)
                console.log(user.data[0].fname);
                setName(user.data[0].fname)
                setContact(user.data[0].phoneNo)
                setNewEmail(user.data[0].email)
                setGender(user.data[0].gender)
                setCountry(user.data[0].country)
                localStorage.setItem("username",name)
                console.log("my user country === >",user.data[0].country);
            }
        } catch (error) {
            console.log("user data error", error);
        }

    }
    const handlerUpdateAccount = async () => {
        setHideBtn(false)
        const updateDate = {
            fname: name,
            phoneNo: contact,
            gender: gender,
            country: country
        }
        console.log("user data ===>", updateDate);
        if (updateDate) {
            const userUpdate = await FetchApi("update-profile", updateDate, {
                method: "PATCH"

            })
            console.log("update", userUpdate.status);
            if (userUpdate.status === 200) {
                console.log("success update");
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)

                    setIsInput(false)
                }, 1500);
            }
        }
    }
    const hanlderEmailChange = () => {
        setEmailChange(true)
        setHideChange(true)
    }
    // console.log("my name is ====>",name);
    const getNewEmail = (event) => {
        const value = event.target.value;
        setNewEmail(value)
        if (value) {
            setNewEmailError("")
        }
        if (!emailVaidation(newEmail)) {
            setNewEmailError("Enter valid email")
        }
    }
    const getReEnterEmail = (event) => {
        const value = event.target.value;
        setReEnterEmail(value)
        if (value) {
            setReEnterEmailError("")
        }

    }
    const hanlderUpdateEmail = async () => {
        if (newEmail && emailVaidation(newEmail)) {
            setNewEmailError("")
        } else if (!newEmail) {
            setNewEmailError("Enter your email")
            isAllDataValid = false;
        } else {
            setNewEmailError("Enter valid email")
            isAllDataValid = false;
        }
        if (newEmail === ReEnterEmail) {
            setReEnterEmailError("")
        } else if (!ReEnterEmail) {
            setReEnterEmailError("Enter re-email")
            isAllDataValid = false;
        } else {
            setReEnterEmailError("Email is not match")
            isAllDataValid = false;

        }
        if (isAllDataValid === true) {
            const updateDate = {
                email: newEmail

            }
            if (updateDate) {
                const userUpdate = await FetchApi("update-profile", updateDate, {
                    method: "PATCH"

                })
                console.log("my update email===>", userUpdate);
                if (userUpdate.status === 200) {
                    console.log("success update");
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                        setEmailChange(false)
                        setHideChange(false)

                    }, 1500);
                }
            }
        }
    }
    return (

        <>
            <div className='bg-color'>
                <div className='my-nav'>
                    <SideNavbar userName={name} />
                </div>
                {success ? (
                    <div>
                        <div className="success-update">
                            <div className="success-content1">
                                <img src="/all image/7efs.gif" alt="" style={{ width: "15rem" }} />
                                <h2 style={{ marginTop: "-2rem" }}>Successful!</h2>
                                <p style={{ width: "100%" }}>Congratulations, Your Account is Update!</p>

                            </div>
                        </div>
                    </div>
                ) : ""}
                <div className="my-account-main-screen">
                    <div className='my-profile'>
                        <h1>My Account</h1>
                        <div className='my-profile-screen'>
                            <div className='profile-details mx-2'>
                                <div className='edit-btn'>
                                    <div className='edit-pro'>

                                        <h5>Profile</h5>
                                        {!hideBtn && (

                                            <button onClick={handleraAccountupdate} >Edit</button>
                                        )}
                                    </div>
                                </div>
                                {!isInput ? (
                                    <div>
                                        {userData.map((data, index) => {
                                            return (
                                                <div>
                                                    <p>
                                                        <strong>Full Name: </strong>
                                                        {name}
                                                    </p>
                                                    <p>
                                                        <strong>Phone No: </strong>
                                                        {contact}
                                                    </p>
                                                    <p>
                                                        <strong>Gender: </strong>
                                                        {gender}
                                                    </p>
                                                    <p>
                                                        <strong>County: </strong>
                                                        {country}
                                                    </p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                ) :
                                    (
                                        <div className='profile-frame'>

                                            <div className=''>
                                                <strong>First Name: </strong>
                                                <input type="text"
                                                    className='fname-item'
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <strong>Phone No: </strong>
                                                <input type="text"
                                                    className='fname-item1'
                                                    value={contact}
                                                    onChange={(e) => setContact(e.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <strong>Gender: </strong>
                                                <label htmlFor="" className='fname-item2'>  Female</label>
                                                <input type="radio"
                                                    name='gander'
                                                    className='mx-2'
                                                    checked={gender === "female" ? true : false}
                                                    value={"female"}
                                                    onChange={handleGanderChange}
                                                />
                                                <label htmlFor="" className='mx-2'>Male</label>
                                                <input type="radio"
                                                    name='gander'
                                                    value={"male"}
                                                    checked={gender === "male" ? true : false}
                                                    onChange={handleGanderChange}
                                                />
                                            </div>
                                            <div>
                                                <strong >County: </strong>
                                                <select defaultValue={country} name="" id="" className='my-select-acc fname-item2' onChange={(e) => setCountry(e.target.value)}>
                                                    <option value="">Select Country</option>
                                                    <option value="Indian">India</option>
                                                    <option value="Usa">Usa</option>
                                                    <option value="Chine">Chine</option>
                                                </select>
                                            </div>
                                            <div style={{ marginTop: "1.2rem" }}>

                                                <button className='btn-cancel' onClick={handlerCancel}>Cancel</button>
                                                <button className='btn-submit-account' onClick={handlerUpdateAccount}>Save</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='profile-details mx-2' id="social">
                                <h5 className='social'>Social Link</h5>
                                < p className='msg'>Connect your social accounts to log in through Facebook or Google+.</p>

                                <p className='link-mesg'>Link more social network accounts</p>
                                <div className='icon'>

                                    <a href="https://www.facebook.com/" target="_blank" style={{ fontSize: "150%" }} className='mx-2'>
                                        <i class="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" >
                                        <img src="google1.png" alt="" style={{ width: "35px", marginTop: "-5px" }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='email-change'>
                        <div className='email-text'>
                            <div className='email-update'>

                                <h5>Email</h5>
                                {!hideChange && (

                                    <button onClick={hanlderEmailChange}>Change</button>
                                )}
                            </div>
                        </div>
                        {!emailChange ?
                            (<div>
                                <p className='email-del'>
                                    <strong>Current email: </strong>
                                    {newEmail}
                                </p>
                            </div>) : (
                                <div>
                                    <div className='email-del'>
                                        <strong>New email: </strong>
                                        <input type="email"
                                            className='input1'
                                            placeholder='New email'
                                            value={newEmail}
                                            onChange={getNewEmail}
                                        /><br></br>
                                        {newEmailError}
                                        <strong>Re-enter email: </strong>
                                        <input type="email"
                                            placeholder='Re-enter new email'
                                            value={ReEnterEmail}
                                            onChange={getReEnterEmail}
                                        />
                                        {ReEnterEmailError}
                                        <div style={{ marginTop: "2rem" }}>
                                            <button className='btn-cancel' onClick={handlerCancel}>Cancel</button>
                                            <button className='btn-submit-account' onClick={hanlderUpdateEmail}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>

                </div>
            </div>
        </>
    )
}

export default MyAccount;