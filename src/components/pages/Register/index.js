import React, { useState } from 'react'
import FetchApi from '../../../constants/FetchApi'
import Cookies from 'js-cookie'
import './index.mudel.css'
import AppConfig from "../../../constants/AppConfig";
import nameValidation from '../../../utils/nameValidation';
import emailVaidation from '../../../utils/emailValidation';
import SuccessPopup from '../../Success';
import phoneValidation from '../../../utils/phoneValidation';
// import '../../Success/SuccessPopup.css';


const Register = () => {
    const [uname, setUname] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmpass, setConfirmpass] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)
    const DOMAIN = AppConfig.SUB_DOMAIN
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handlerValidation = async (e) => {
        try {
            e.preventDefault()
            console.log("my event");

            if (uname.length === 0 || email.length === 0 || pass.length === 0 || confirmpass.length === 0 || gender.length === 0 || phone.length === 0) {

                console.log("some issus");
                setError(true)
            }
            // if (!error) {


            const formUserData = {
                fname: uname,
                email: email,
                password: pass,
                gender: gender ? gender : "",
                phoneNo: phone
            }
            console.log("my obj data", formUserData)
            if (formUserData) {

                const data = await FetchApi("user-register", formUserData, {
                    method: "POST",
                    headers: "application/json"
                    // isForm:true
                })
                console.log("my form data", data)
                Cookies.set('jwt', data.token, { expires: 1 })
                if (data.status === 422 || !data) {
                    window.alert("invalid registration")
                }
                if (data.status === 301) {
                    window.alert("This email is already exist");
                } else if (data.status === 200) {

                    console.log("success");
                    setShowSuccessPopup(true);
                    setTimeout(() => {
                        setShowSuccessPopup(false);
                        window.location.href = DOMAIN + "login";
                    }, 1500);
                   
                }

            }


            // }



        } catch (error) {
            console.log("MY ERROR ==>", error)
        }
    }
    const handleGanderChange = (evet) => {
        setGender(evet.target.value)

    }

    return (
        <>
            <div className='body w-100 vh-120 d-flex justify-content-left align-items-center' >

                <div>

                    <form action="" className='form' id='form' >
                        {/* <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" /> */}
                        <h4>SIGN-UP</h4>
                        <div className='input-menu'>
                            <input
                                type="text"
                                name="username"
                                className='box'
                                autocomplete="off"
                                placeholder='Enter your username'
                                value={uname}
                                onChange={(e) => { setUname(e.target.value) }}
                            />
                            <label
                                htmlFor=""
                                className='error-msg'
                                style={{ color: "red", height: "1rem" }}
                            >
                                {
                                    error && uname.length === 0 ? (
                                        "Please enter your fullname..!") :
                                        error && !nameValidation(uname) ? (
                                            "Enter Only charater"
                                        ) : ("")
                                }

                            </label>

                            <input
                                type="email"
                                name="email"
                                className='box'
                                placeholder='Enter your email'
                                autocomplete="off"
                                value={email}

                                onChange={(e) => { setEmail(e.target.value) }}
                            />

                            <label
                                htmlFor=""
                                style={{ color: "red", height: "1rem" }}
                            >
                                {
                                    error && email.length === 0 ? (
                                        "Please enter your email..!") :
                                        error && !emailVaidation(email) ? (
                                            "Invalid email format"
                                        ) : ""
                                }

                            </label>
                            <input
                                type="text"
                                className='box'
                                name='phone'
                                placeholder='Enter your phone number'
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                            <label
                                htmlFor=""
                                style={{ color: "red", height: "1rem" }}
                            >
                                {
                                    error && phone.length === 0 ? (
                                        "Please enter your Phone number..!") :
                                        error && !phoneValidation(phone) ? (
                                            " invalid format"
                                        ) : ""
                                }

                            </label>
                            <input
                                id="pass"
                                type="password"
                                name="password"
                                className='box'
                                autocomplete="off"
                                placeholder='Enter your password'
                                value={pass}
                                onChange={(e) => { setPass(e.target.value) }}
                            />

                            <label
                                htmlFor=""
                                style={{ color: "red", height: "1rem" }}
                            >
                                {error && pass.length === 0 ? "Please enter your password..!" : ""}

                            </label>
                            {/* 
                            <input
                                type="password"
                                className='box'
                                name='cpassword'
                                placeholder='Enter your Confirm password'
                                value={confirmpass}
                                onChange={(e) => { setConfirmpass(e.target.value) }}
                            />
                            <label
                                htmlFor=""
                                style={{ color: "red", height: "1rem" }}
                            >
                                {
                                    error && confirmpass.length === 0 ?
                                       ( "Please enter your confirm password..!")
                                        : error && pass === confirmpass ?("Password is unmatch"):""
                                }
                            </label> */}

                        </div>
                        {/* <div>
                            <label htmlFor="" className='gander-select'>Select Gander : </label>
                            <label htmlFor="" className='gander-item'>Female</label>

                            <input
                                type="radio"
                                name='gander'
                                value={"female"}
                                //  checked={gender==='female'}
                                onChange={handleGanderChange}
                            />
                            <label htmlFor="" className='gander-item'>Male</label>
                            <input
                                type="radio"
                                name='gander'
                                value={"male"}
                                //  checked={gender==='male'}
                                onChange={handleGanderChange}
                            />
                        </div> */}

                        {/* <label htmlFor="" style={{ color: "red", height: "1rem" }}> {error && gender.length === 0 ? "Please select your gander..!" : ""}</label> */}
                        <button type='submit' id='submit' onClick={handlerValidation}>SUBMIT</button>
                        <div style={{ display: "inline-flex" }}>
                            <p className=''>If You have an account Click here </p>
                            <a href="/login" className='mx-2' style={{ textDecoration: "none" }} > Sign-In</a>

                        </div>
                    </form>

                </div>
                {showSuccessPopup && <SuccessPopup message={"Congratulations, Your account has been successfully created."} />}

            </div>
        </>
    )
}

export default Register;