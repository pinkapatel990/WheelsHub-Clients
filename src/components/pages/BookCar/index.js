import './index.css'
import Navbar from '../../Components/Navbar';
import React, { useEffect, useState } from 'react';
import CustomInput from '../../Components/Elements/CustomInput';
import CustomButton from '../../Components/Elements/CustomButton';
import axios from 'axios';
import appConfig from '../../Constants/appConfig';
// import Footer from '../../Components/Footer'
import CustomSpan from '../../Components/Elements/CustomSpan';
import fetchApi from '../../Constants/fetchApi';

function BookCar() {
    const [imgData, setImgData] = useState([]);
    const [carDetails, setCarDetails] = useState('');
    const [currentImage, setCurrentImage] = useState('');
    const [picUpLoc, setPicUpLoc] = useState('');
    const [pickUpDate, setPickUpDate] = useState('');
    const [pickUpTime, setPickUpTime] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [returnTime, setReturnTime] = useState('');
    const [picUpLocErrorMsg, setPicUpLocErrorMsg] = useState('')
    const [pickUpTimeDateErrorMsg, setPickUpTimeDateErrorMsg] = useState('')
    const [returnTimeDateErrorMsg, setReturnTimeDateErrorMsg] = useState('')
    const [vehicleNum, setVehicleNum] = useState('')

    useEffect(() => {
        async function fetchCarData() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const carId = urlParams.get("car_id");
                if (urlParams && carId) {
                    // const fetchCarData = await axios.post(appConfig.API_BASE_URL + user-getCarList?car_id=${carId});
                    const getImgData = fetchCarData.data.data.img
                    const getCarDetailData = fetchCarData.data.data
                    console.log("imgData ==== >", getCarDetailData._id)
                    setVehicleNum(getCarDetailData.vehicleNum)
                    setImgData(getImgData)
                    setCarDetails(getCarDetailData)
                }
            } catch (error) {
                console.error("Error fetching car data:", error);
            }
        }

        fetchCarData();

    }, []);
    console.log("setVehicleNum ==== >", vehicleNum)

    function sliderGallery(smallImg) {
        setCurrentImage(smallImg);
    }

    let value = ""
    const getPicUpLocInput = (event) => {
        value = event.target.value
        setPicUpLoc(value)
        setPicUpLocErrorMsg("")
    }
    const getPickUpDateInput = (event) => {
        value = event.target.value
        setPickUpDate(value)
        setPickUpTimeDateErrorMsg("")
    }
    const getPickUpTimeInput = (event) => {
        value = event.target.value
        setPickUpTime(value)
        setPickUpTimeDateErrorMsg("")

    }
    const getReturnDateInput = (event) => {
        value = event.target.value
        setReturnDate(value)
        setReturnTimeDateErrorMsg("")
    }
    const getReturnTimeInput = (event) => {
        value = event.target.value
        setReturnTime(value)
        setReturnTimeDateErrorMsg("")
    }
    const today = new Date().toISOString().slice(0, 10);
    let isAllDataValid = true;

    const onBtnClick = async () => {
        if (picUpLoc) {
            setPicUpLocErrorMsg("");
        } else {
            setPicUpLocErrorMsg("Enter your pickUp location");
            isAllDataValid = false;
        }

        if (pickUpDate && pickUpDate > today && pickUpTime) {
            setPickUpTimeDateErrorMsg("");
        } else if (pickUpDate <= today) {
            setPickUpTimeDateErrorMsg("Select a valid future date");
            isAllDataValid = false;
        } else {
            setPickUpTimeDateErrorMsg("Select date and time");
            isAllDataValid = false;
        }
        if (returnDate && returnDate > today && returnTime) {
            setReturnTimeDateErrorMsg("");
        } else if (returnDate <= today) {
            setReturnTimeDateErrorMsg("Select a valid future date");
            isAllDataValid = false;
        } else {
            setReturnTimeDateErrorMsg("Select return date and time");
            isAllDataValid = false;
        }

        if (isAllDataValid) {
            const carBookingData = {
                pickUpLocation: picUpLoc,
                pickUpDate: pickUpDate,
                pickUpTime: pickUpTime,
                returnDate: returnDate,
                returnTime: returnTime,
                vehicleNum: carDetails.vehicleNum,
                brand: carDetails.brand,
                dailyRent: carDetails.dailyRent,
                car_id: carDetails._id
            };
            // console.log("carbooking Data === >", carBookingData.car_id);
            try {
                const postBookingData = await fetchApi("user-carBooking", carBookingData, {
                    method: "POST",
                });
                // console.log("api calling ===== >", postBookingData);
                if (postBookingData.status === 200) {
                    setPicUpLoc('');
                    setPickUpDate('');
                    setPickUpTime('');
                    setReturnDate('');
                    setReturnTime('');
                }
                // window.location = booking-confirm?vehicle_num=${vehicleNum}
            } catch (error) {
                console.error("Error while making the API call:", error);
            }
        }
    };

    return (
        <>
            <div className="bn-body-container">
                <h1 className="bn-heading-container"> Book Your Ride Now</h1>
                {/* <div className='boonNow-productList'>
                    <div className='bookNow-fullImag'>
                   <div className='boonNow-small-productList' style={{ display: "flex" }}>
                         <img src={currentImage || appConfig.BASE_URL + /carList/${imgData[0]}} alt="" id='imageBox' />
                        <img src={appConfig.BASE_URL + /carList/${imgData[2]}} alt="" onClick={() => sliderGallery(appConfig.BASE_URL + /carList/${imgData[2]})} />
                     </div>
                        <img src={appConfig.BASE_URL + /carList/${imgData[1]}} alt="" onClick={() => sliderGallery(appConfig.BASE_URL + /carList/${imgData[1]})} />
                       <img src={appConfig.BASE_URL + /carList/${imgData[3]}} alt="" onClick={() => sliderGallery(appConfig.BASE_URL + /carList/${imgData[3]})} />
                        <img src={appConfig.BASE_URL + /carList/${imgData[4]}} alt="" onClick={() => sliderGallery(appConfig.BASE_URL + /carList/${imgData[4]})} />
                    </div>
                </div> */}
                <div className='bn-CarDetaileBody'>
                    <p>{carDetails.brand}</p>
                    <h4 className='bn-specification'>Specifications</h4>
                    <div className='car-data'>
                        <span className='item1'>vehicle</span>
                        <span className='vehicle-item'>{carDetails.vehicleNum}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Seat</span>
                        <span className='item2'>{carDetails.seater}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Door</span>
                        <span className='item2'>{carDetails.door}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Luggage</span>
                        <span style={{ marginLeft: "7.5rem", fontWeight: "bold" }}>{carDetails.luggage}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Exterior Color</span>
                        <span style={{ marginLeft: "4.5rem", fontWeight: "bold" }}>{carDetails.exteriorClr}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Interior Color</span>
                        <span style={{ marginLeft: "5rem", fontWeight: "bold" }}>{carDetails.interiorClr}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Transmission</span>
                        <span style={{ marginLeft: "5rem", fontWeight: "bold" }}>{carDetails.transmission}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>Year</span>
                        <span style={{ marginLeft: "10rem", fontWeight: "bold" }}>{carDetails.year}</span>
                    </div>
                    <div className='car-data'>
                        <span className='item1'>City</span>
                        <span style={{ marginLeft: "10rem", fontWeight: "bold" }}>{carDetails.city}</span>
                    </div>
                </div>

                <div className='bn-bookingform'>
                    <div className='bn-dailyrate'>
                        <h4>Daily Rent</h4>
                        <h1>₹{carDetails.dailyRent}</h1>
                    </div>
                </div>
                <div className='bn-bookingform1'>
                    <h5>Booking this car</h5>
                    <div className='bn-inputContainer1'>
                        <p>Pick Up Location</p>
                        <CustomInput
                            type='string'
                            placeholder='PickUp location'
                            className='bn-inputContainer'
                            value={picUpLoc}
                            onChange={getPicUpLocInput}
                        ></CustomInput>
                        <CustomSpan
                            className='errorMsg'
                        >{picUpLocErrorMsg}</CustomSpan>
                    </div>
                    <div className='bn-inputDateMain'>
                        <p>Pick Up Date & Time</p>
                        <div style={{ display: "flex" }}>
                            <CustomInput
                                type='Date'
                                placeholder='PickUp location'
                                className='bn-inputDate'
                                value={pickUpDate}
                                // min={new Date().toISOString().split('T')[0]}
                                min={today}
                                onChange={getPickUpDateInput}
                            ></CustomInput>
                            <CustomInput
                                type='time'
                                className='bn-inputTime'
                                value={pickUpTime}
                                onChange={getPickUpTimeInput}
                            />
                        </div>
                        <CustomSpan
                            className='errorMsg'
                        >{pickUpTimeDateErrorMsg}</CustomSpan>
                    </div>
                    <div className='bn-inputDateMain'>
                        <p>Return Date & Time</p>
                        <div style={{ display: "flex" }}>
                            <CustomInput
                                type='Date'
                                placeholder='PickUp location'
                                className='bn-inputDate'
                                value={returnDate}
                                min={today}
                                onChange={getReturnDateInput}
                            ></CustomInput>
                            <CustomInput
                                type='time'
                                className='bn-inputTime'
                                value={returnTime}
                                onChange={getReturnTimeInput}
                            />
                        </div>
                        <CustomSpan
                            className='errorMsg'
                        >{returnTimeDateErrorMsg}</CustomSpan>
                    </div>
                    <CustomButton type="button" className='bn-btn-container' onClick={onBtnClick}>Book NOW</CustomButton>
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}
export default BookCar;