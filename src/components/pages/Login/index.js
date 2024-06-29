import './index.css'
import { useState } from "react";
import FetchApi from "../../../constants/FetchApi";
import Cookies from "js-cookie";
import AppConfig from "../../../constants/AppConfig";

import emailVaidation from '../../../utils/emailValidation';

const Login = () => {
    const [userName, setUserName] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState(false)
    const [showInvalid,setShowInvalid] = useState(false)
    const DOMAIN = AppConfig.SUB_DOMAIN
    const hamdleLoginUser = async (e) => {
        try {
            e.preventDefault()
            if (userName.length === 0 || pass.length === 0) {
                setError(true);
            } else {

                const loginData = {
                    email: userName,
                    password: pass
                }
                const res = await FetchApi("user-login", loginData, {
                    method: "POST",
                    headers: "application/json"
                })
                // new Date(Date.now() + 30000) 
                console.log("my login data ===>",res);
                Cookies.set('LTK', res.token, { expires: 30000 })

                if (res.status === 200) {
                    //   console.log("login succefully")
                    window.location.href = DOMAIN;
                } else{
                    setShowInvalid(true)
                    setTimeout(() => {
                        setShowInvalid(false)
                    }, 3000);
                }

            }
        } catch (error) {

        }
    }

    return (
        <>
            <div className=" w-100 vh-120 d-flex justify-content-left align-items-center main-div" >
                        {/* <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" /> */}

                <div className="loginBox">
                   <div>
                   <p style={{height:"1rem",marginBottom:"0.5rem"}}>
                    {showInvalid?
                    <div class="" role="" style={{color:"red",textAlign:"center"}}>
                        invalid login details..!
                    </div>
                    :""}
                    </p>
                    <h3 className="head-text">Sign in here</h3>
                    <form onSubmit={() => { return false }}>
                        <div className="inputBox">
                            {/* <i class="fas fa-envelope"></i> */}
                           
                            <input
                                id="uname"
                                type="text"
                                name="Username"
                                placeholder="Email"
                                value={userName}
                                autoComplete='off'
                                onChange={(e) => { setUserName(e.target.value) }}
                            />
                            <label
                                htmlFor=""
                                style={{ color: "red", height: "0rem" }}
                                >
                                {
                                    error && userName.length === 0 ? (
                                        "Please enter your email..!") :
                                        error && !emailVaidation(userName) ? (
                                            "Invalid email format"
                                            ) : ""
                                        }
                                       
                                        </label>
                          
                            <input
                                id="pass"
                                type="password"
                                name="Password"
                                placeholder="Password"
                                value={pass}
                                onChange={(e) => { setPass(e.target.value) }}
                            />
                           

                             <label
                                htmlFor=""
                                style={{ color: "red", height: "2rem" }}
                                >
                                {error && pass.length === 0 ? "Please enter your password..!" : ""}

                            </label>
                               

                        </div>
                        <input type="submit" name="" value="Login" onClick={hamdleLoginUser} />
                    </form>
                    <a href="#">Forget Password<br /> </a>
                    <div className="text-center">
                        <p style={{ color: " #59238F" }} className="paragraph">
                            <a href="/register">
                                Sign-Up
                            </a>
                        </p>
                    </div>
                   
                    </div>
                </div>
            </div>



        </>
    )
}

export default Login;