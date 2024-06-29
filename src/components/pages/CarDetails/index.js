import { useEffect, useRef, useState } from 'react'
import FetchApi from '../../../constants/FetchApi'
import './index.modul.css'
import CustomButton from '../../Element/CustomButton'
import AppConfig from '../../../constants/AppConfig'
import PageLoader from '../../PageLoader'
import Cookies from 'js-cookie'
import SlideImage from '../../SlideImage'
import { Timeit } from 'react-timeit'

const CarDetails = () => {
    const [myCarDetails, setMyCarDetails] = useState({})
    const [isError, setIsError] = useState(false)
    const [from, setFrom] = useState("")
    const [pickupDate, setPickupDate] = useState("")
    const [dropupDate, setDropupDate] = useState("")
    const [pickupTime, setPickupTime] = useState("")
    const [dropupTime, setDropupTime] = useState("")
    const pRef = useRef(null);
    const DOMAIN = AppConfig.SUB_DOMAIN
    const BASE_URL = AppConfig.BASE_URL
    const [errorFrom, setErrorFrom] = useState("");
    const [errorPickup, setErrorPickup] = useState("");
    const [errorDropDate, setErrorDropDate] = useState("");
    const [times, setTimes] = useState("")
    const [error,setError] = useState(false)
    const todays = new Date().toJSON().slice(0, 10);
    const [currentImage, setCurrentImage] = useState('');

    function sliderGallery(smallImg) {
        setCurrentImage(smallImg);
    }

    let isAllData = true;
    var url_string = window.location;// it is get current page url
    var url = new URL(url_string);
    var myCarKey = url.searchParams.get("item_key");
    var shareRent = url.searchParams.get("share_car")
    console.log("mycar key ==>",shareRent);
    const handlerDisplayOneCarDetails = async () => {
        if (myCarKey) {
            const data = await FetchApi("/display-carlist?item_id=" + myCarKey, "", {
                method: "GET"
            })
            setMyCarDetails(data)
        } else {
            setIsError(true)
        }


    }
    const dateString = myCarDetails.registerYear
    const makeYear = myCarDetails.makeYear
    const carRating = myCarDetails.schedule ? myCarDetails.schedule : "";

    const formatDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const makeDate = new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const inputFrom = (e) => {
        const value = e.target.value;
        setFrom(value)
        if (value) {
            setErrorFrom("")
        }
    }
    const inputPickupDate = (e) => {
        const value = e.target.value;
        setPickupDate(value)
        if (value) {
            setErrorPickup("")
        }
    }
    const inputDropupDate = (e) => {
        const value = e.target.value;
        setDropupDate(value)
        if (value) {
            setErrorDropDate("")
        }
    }

    const handlarCarBooking = async () => {
        try {
            if (!from && !pickupDate && !dropupDate )  {
                setError(true)
                isAllData = false;
            } else {
                setError(false)
            }
            // if (date) {
            //     setErrorDate("")
            // } else {
            //     setErrorDate("Error: Pickaup date & Time")
            //     isAllData = false;
            // }
            // if (pickupDate) {
            //     setErrorPickup("")
            // } else {
            //     setErrorPickup("Error: Enter Pickup Date & Time");
            //     isAllData = false;
            // }
            // if (dropupDate) {
            //     setErrorDropDate("")
            // } else {
            //     setErrorDropDate("Error: Enter Dropup Date & Time")
            //     isAllData = false;
            // }
            console.log(carRating);
            if (carRating) {
                console.log("my ref",pRef.current);
                if (isAllData === true) {
                    const Date1 = new Date(pickupDate)
                    const date2 = new Date(dropupDate)
                    const differenceInMilliseconds = Math.abs(Date1 - date2);
                    const differenceInDays = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
                    const totalPtice = carRating * differenceInDays;
                    console.log("day diff==>", totalPtice);
                    const carBookingDetails = {
                        from: from,
                        pickupDate: pickupDate,
                        DropDate: dropupDate,
                        carName: myCarDetails.carName,
                        price: carRating,
                        totalPrice: totalPtice,
                        vehicalNo: myCarDetails.vehicalNo,
                        bookId: myCarKey,
                        pickupTime: pickupTime,
                        dropTime: dropupTime,
                        shareRent:shareRent
                    }
                    console.log("object data =>", carBookingDetails);
                    if (carBookingDetails) {

                        const carBookingStr = JSON.stringify(carBookingDetails)
                        localStorage.setItem("booking", carBookingStr);

                        const token = Cookies.get("LTK");
                        if (token) {

                            window.location.href = DOMAIN + "booking-confiem";
                        } else {
                            window.location.href = DOMAIN + "login";
                        }
                    }

                }
            }

        } catch (error) {
            console.log("car booking error", error)
        }
    }

    useEffect(() => {
        handlerDisplayOneCarDetails()
    }, [])

    const [hour, setHour] = useState(12);

    const options = [];
    for (let i = 1; i <= hour; i++) {
        options.push(
            <option key={i} value={i}>
                {i}
            </option>
        )
    }


    return (
        <>
            <div className="d-flex blackgroun">

                <div className='car-del-main'>

                    {myCarDetails && myCarDetails.image && myCarDetails.city ? (
                        <>
                            <div className='carframe'>
                                <div className='image-frame' style={{ marginTop: "5rem" }}>
                                    <div className='mx-2'>
                                        <img src={currentImage || BASE_URL + /carImage/ + myCarDetails.image[0]} alt="" className='image-display' />
                                    </div>
                                    <div className='car-imag-mul mx-1' id="mul-car">
                                        <img src={BASE_URL + /carImage/ + myCarDetails.image[1]} alt="" className='image-side mx-1 my-1' onClick={(e) => sliderGallery(BASE_URL + /carImage/ + myCarDetails.image[1])} />
                                        <img src={BASE_URL + /carImage/ + myCarDetails.image[0]} alt="" className='image-side mx-1 my-1' onClick={(e) => sliderGallery(BASE_URL + /carImage/ + myCarDetails.image[0])} />
                                        <img src={BASE_URL + /carImage/ + myCarDetails.image[2]} alt="" className='image-side  mx-1 my-1' onClick={(e) => sliderGallery(BASE_URL + /carImage/ + myCarDetails.image[2])} />
                                        <img src={BASE_URL + /carImage/ + myCarDetails.image[3]} alt="" className='image-side mx-1 my-1' onClick={(e) => sliderGallery(BASE_URL + /carImage/ + myCarDetails.image[3])} />
                                        <img src={BASE_URL + /carImage/ + myCarDetails.image[4]} alt="" className='image-side mx-1 my-1' onClick={(e) => sliderGallery(BASE_URL + /carImage/ + myCarDetails.image[4])} />
                                        {/* <img src={BASE_URL + /carImage/ + myCarDetails.image[5]} alt="" className='image-side mx-1 my-1' /> */}
                                    </div>
                                </div>



                                <div className='car-del'>

                                    <div className='bn-CarDetaileBody'>
                                        <p> {myCarDetails.carName}</p>
                                        <h4 className='bn-specification'>Specifications</h4>
                                        <div className='car-data'>
                                            <span className='item1'>Seat</span>
                                            <span className='vehicle-item' style={{ marginLeft: "7rem" }}>{myCarDetails.seats}</span>
                                        </div>
                                        <div className='car-data'>
                                            <span className='item1'>Vehicle</span>
                                            <span className='vehicle-item ' style={{ marginLeft: "5rem" }}>{myCarDetails.vehicalNo}</span>
                                        </div>
                                        <div className='car-data'>
                                            <span className='item1'>Make year</span>
                                            <span className='vehicle-item' style={{ marginLeft: "4rem" }}>{makeDate}</span>
                                        </div>
                                        <div className='car-data'>
                                            <span className='item1'>Registration year</span>
                                            <span className='vehicle-item'>{formatDate}</span>
                                        </div>
                                        <div className='car-data'>
                                            <span className='item1'>Trasmission</span>
                                            <span className='vehicle-item' style={{ marginLeft: "3.6rem" }}>{myCarDetails.trasmission}</span>
                                        </div>
                                        <div className='car-data'>
                                            <span className='item1'>City</span>
                                            <span className='vehicle-item' style={{ marginLeft: "7rem" }}>{myCarDetails.city}</span>
                                        </div>
                                        <div className='car-data'>
                                            <span className='item1'>Per Day   </span>
                                            <span className='vehicle-item' style={{ marginLeft: "4rem" }}>{myCarDetails.schedule}</span>
                                        </div>

                                    </div>
                                </div>



                                {/* <div className='booking-side mx-2' >
                                    <h4 className='book-title'>Book This car</h4>
                                    <div className='amount-screen'>
                                        <p>Per Day</p>
                                        <h2 ref={pRef}>{carRating.substring(carRating.length - 5)}₹</h2>
                                    </div>

                                    <div>
                                        <span className="" >Pickup Location</span>
                                        <input
                                            type="text"
                                            className="my-input"
                                            placeholder='Your pickup location'
                                            onChange={inputFrom}
                                        />
                                        <div style={{ height: "0.8rem", color: "red", fontSize: "small" }}>
                                            {errorFrom}

                                        </div>
                                        <div>

                                            <span className="" >Pick Up Date & Time</span>
                                            <div style={{ display: "flex" }}>

                                                <input
                                                    type="date"
                                                    style={{ width: "12rem" }}
                                                    className="my-input"
                                                    placeholder='Your pickup location'
                                                    onChange={inputPickupDate}

                                                    min={todays}
                                                />
                                                <input type="Time"
                                                    className="timeInput"
                                                    onChange={(e) => setPickupTime(e.target.value)}
                                                />
                                            </div>
                                            <div style={{ height: "0.3rem", color: "red", fontSize: "small" }}>
                                                {errorPickup}
                                            </div>
                                        </div>
                                        <div style={{ marginTop: "1rem" }}>

                                            <span className="drop-time"  >Drop Up Date & Time</span>
                                            <div style={{ display: "flex" }}>
                                                <input
                                                    type="date"
                                                    style={{ width: "12rem" }}
                                                    className="my-input"
                                                    placeholder='Your pickup location'
                                                    onChange={inputDropupDate}
                                                    // value={todays}
                                                    min={todays}
                                                />
                                                <input type="Time"
                                                    className="timeInput"
                                                    onChange={(e) => setDropupTime(e.target.value)}
                                                />
                                            </div>
                                            <div style={{ height: "0.3rem", color: "red", fontSize: "small" }}>
                                                {errorDropDate}
                                            </div>
                                        </div>
                                        <CustomButton onClick={handlarCarBooking} className="btn-book"> Continue</CustomButton>


                                    </div>

                                </div> */}
                            </div>

                            {/* </div> */}
                            <div className='carBooking_Container'>
                                <h2>book a car</h2>
                                {error && 
                                <p className="error-message">
                                    All fields required! <i className="fa-solid fa-xmark"></i>
                                </p>
                                }
                                <div className='carBooking_item_input'>
                                    <div className='form_field'>

                                        <label>

                                            Select Your Location <b className='bold_hash'> *</b>
                                        </label>
                                        <input type='text'
                                            placeholder='location'
                                            onChange={inputFrom}
                                            className='input_control'
                                        />
                                    </div>
                                    <div className='form_field'>

                                        <label>Pick-Up <b className='bold_hash'> *</b></label>
                                        <input
                                            type="date"
                                            onChange={inputPickupDate}
                                            min={todays}
                                            className='input_control'
                                        />
                                    </div>
                                    <div className='form_field'>

                                        <label htmlFor="">Drop-of <b className='bold_hash'> *</b></label>
                                        <input
                                            type="date"
                                            onChange={inputDropupDate}
                                            min={todays}
                                            className='input_control'
                                        />
                                    </div>
                                </div>
                                <div className='carBooking_item_input'>

                                    <div className='form_field'>

                                        <label>Pick-Up <b className='bold_hash'> *</b></label>
                                        <input
                                            type="time"
                                            onChange={(e) => setPickupTime(e.target.value)}
                                            className='input_control'
                                        />
                                    </div>
                                    <div className='form_field'>

                                        <label htmlFor="">Drop-of <b className='bold_hash'> *</b></label>
                                        <input
                                            type="time"
                                            onChange={(e) => setDropupTime(e.target.value)}
                                            className='input_control'
                                        />
                                       
                                    </div>
                                    <div className='form_field'>
                                        <button onClick={handlarCarBooking}>NEXT</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                        : (

                            <PageLoader />



                        )
                    }




                </div>
                {/* <SlideImage/> */}

            </div >
            {/* <Footer /> */}
        </>
    )
}

export default CarDetails; 