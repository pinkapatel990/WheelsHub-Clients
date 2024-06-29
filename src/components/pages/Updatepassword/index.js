import { useEffect, useState } from 'react';
import SideNavbar from '../../SideNavber';
import './update.css'
import FetchApi from '../../../constants/FetchApi';
import InputElm from '../../Element/InputElm';
import CustomSpan from '../../Element/CustomSpan';
const Updatepassword = () => {
    const [currentPass, setCurrentPass] = useState("")
    const [currentError, seCurrentError] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const [newError, setNewError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('');
    const [conError, setConError] = useState('')
    const [success, setSuccess] = useState(false)
    const [dispPassword, setDispPassword] = useState(false);
    const [hideBtn, setHideBtn] = useState(false);
    let isAllDataValid = true;
    const getCurrentPassword = (e) => {
        const value = e.target.value;
        setCurrentPass(value)
        if (value) {
            seCurrentError("")
        }
        console.log("my pass", currentPass);
    }
    const getNewPassword = (e) => {
        const value = e.target.value;
        setNewPassword(value)
        if (value) {
            setNewError("")
        }
    }
    const getConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value)
        if (value) {
            setConError("")
        }
    }
    const handlerPassword = async () => {
        try {
            if (!currentPass) {
                seCurrentError("Please enter  current password");
                isAllDataValid=false;
            }
            if (!newpassword) {
                setNewError("Please enter  new password")
                isAllDataValid=false;
            }
            if (!confirmPassword) {
                setConError("Please enter confirm password");
                isAllDataValid=false;

            }else if(newpassword!==confirmPassword){
                setConError("password is not match");
                isAllDataValid=false;

            }
            const myPassValue = {
                password:currentPass,
                newPassword:newpassword
            }
            if(isAllDataValid === true){
                const data = await FetchApi("update-pass",myPassValue,{
                    method:"POST"
                })
                console.log("my confirm pass",data);
                if(data.status === 200){
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                        setDispPassword(false)
                    }, 1500);    
                    setCurrentPass("");
                    setNewPassword("")
                    setConfirmPassword("")
                }
               
            }

        } catch (error) {

        }
    }

    const handlerShowUpdatePassword = () => {
        setDispPassword(true)
        setHideBtn(true)
    }
    const hadlerCencal = () => {
        setDispPassword(false)
        setHideBtn(false)
    }

    return (
        <>
            <div className='bg-color2'>
                <div className='my-nav2'>
                    <SideNavbar />
                </div>
                {success ? (
                    <div style={{position:"fixed"}}>
                        <div className="success-update">
                            <div className="success-content1">
                                <img src="/all image/7efs.gif" alt="" style={{ width: "15rem" }} />
                                <h2 style={{ marginTop: "-2rem" }}>Successful!</h2>
                                <p style={{ width: "100%" }}>Congratulations, Your Password is Update!</p>

                            </div>
                        </div>
                    </div>
                ) : ""}
                <div className='pass-change'>
                    <div className='head-pass'>

                        <h3>Update password</h3>
                    </div>
                    <div className='my-pass'>
                        <div className='pass-text'>
                            <h1>Password</h1>
                            {!hideBtn && (

                                <button onClick={handlerShowUpdatePassword}>Change</button>
                            )}
                        </div>
                        {!dispPassword ? (
                            <div>
                                <p className='pass-del'>
                                    <strong>Current Password: </strong>
                                    ****
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className='myform'>
                                    <CustomSpan>Current Password:</CustomSpan>
                                    <input type="password" name="" id=""
                                        className='input-pass'
                                        value={currentPass}
                                        onChange={getCurrentPassword}
                                        placeholder='Current Password'
                                    />
                                    <span style={{ color: 'red', height: "1rem" }}>

                                        {currentError}
                                    </span>
                                    <CustomSpan>New Password</CustomSpan>
                                    <input type="password" name="" id=""
                                        className='input-pass'
                                        value={newpassword}
                                        onChange={getNewPassword}
                                        placeholder='New Password'
                                    />
                                    <span style={{ color: 'red', height: "1rem" }}>
                                        {newError}
                                    </span>
                                    <CustomSpan>Re-enter Password</CustomSpan>
                                    <input type="password"
                                        className='input-pass'
                                        value={confirmPassword}
                                        onChange={getConfirmPassword}
                                        placeholder='Confirm Password'
                                    />
                                    <span style={{ color: 'red', height: "1rem" }}>
                                        {conError}
                                    </span>
                                    <div className='btn-pass'>
                               
                                        <button className='btn-cencel-pass' onClick={hadlerCencal}> Cencel</button>
                                        <button className='mx-2 btn-change-pass' onClick={handlerPassword}>Change</button>
                                    </div>
                                    
                                </div>
                            </div>
                        )}


                    </div>
                </div>
            </div>

        </>
    )
}
export default Updatepassword;