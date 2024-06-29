import { useEffect, useState } from 'react';
import './index.css'
import FetchApi from '../../../constants/FetchApi';
import AppConfig from '../../../constants/AppConfig';
import CustomButton from '../../Element/CustomButton';
import CustomCheckBox from '../../Element/CustomCheckBox';
import { useNavigate } from 'react-router';

let selectedCityList = [];
let selectedSeatsList = [];
const CarsList = (props) => {
    const Navigate = useNavigate()
    const MY_DOMAIN = AppConfig.SUB_DOMAIN;
    const [carItems, setCarItems] = useState([])
    const [isActive, setIsActive] = useState(false);

    const carSeaterList = [
        {
            title: "5 Seats"
        },
        {
            title: "6 Seats"
        },
        {
            title: "7 Seats"
        },

    ]
    const cityFilter = [
        {
            title: "Surat"
        },
        {
            title: "Mumbai"
        },
        {
            title: "Bardoli"
        },
        {
            title: "Ahemdabad"
        },

    ]
    // console.log("my city", cityFilter);
    const [timeDifference, setTimeDifference] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    var url_string = window.location;// it is get current page url
    var url = new URL(url_string);
    var myQuery = url.searchParams.get("city");
    console.log("my query city here ==>", myQuery);
    const handlerListOfCars = async () => {
        try {
            if (!myQuery) {
                const data = await FetchApi('display-carlist', "", {
                    method: "GET",
                })

                    setCarItems(data)
                    console.log("my data ====>", data);
            } else {
                const data = await FetchApi('display-carlist?city=' + myQuery, "", {
                    method: "GET",
                })

                setCarItems(data)
                console.log("my data ", data);
            }
        } catch (error) {
            console.log("some error occur..!", error)
        }
    }
    const handlerOneCarDetails = (id) => {
        // console.log("my car is here", id)
        window.location = window.location.href.split('?')[0] + "?q=" + id;
        window.location.href = MY_DOMAIN + "car-details?item_key=" + id;
        // Navigate(MY_DOMAIN + "car-details?item_key=" + id)
    }
    const handlerCarDetailWithShare = (id, share) => {
        // console.log("my car is here", id)
        window.location = window.location.href.split('?')[0] + "?q=" + id;
        window.location.href = MY_DOMAIN + "car-details?item_key=" + id + "&share_car=" + share;
        // Navigate(MY_DOMAIN + "car-details?item_key=" + id)
    }
    const handlerCarCategary = async (myQuery) => {
        if (myQuery) {
            const data = await FetchApi('display-carlist?car_categary=' + myQuery, "", {
                method: "GET",
            })
            console.log("my car",data)
            setCarItems(data)
        }

        else {
            const filterData = {};
            if (selectedCityList && selectedCityList.length) {
                filterData.city = selectedCityList;
            }
            if (selectedSeatsList && selectedSeatsList.length) {
                filterData.seats = selectedSeatsList;
            }

            const data = await FetchApi('display-carlist', filterData, {
                method: "POST",

            });
            console.log("data", filterData)
            setIsActive(true)
            console.log("car data here=>", data);

            setCarItems(data)
        }

    }
    // const [checkedCities, setCheckedCities] = useState({});
    let selectCity = [];
    const [checkedCities, setCheckedCities] = useState({
        citys: []
    })

    const handleChange = (e) => {
        try {
            //destructuring
            const { value, checked } = e.target;
            const { citys } = checkedCities
            console.log(`${value} is ${checked} city ${checkedCities}`);
            if (checked) {
                selectCity.push(value)
                setCheckedCities({
                    citys: [...citys, value]
                })
                console.log("checked", checkedCities, selectCity);

            } else {
                setCheckedCities({
                    citys: citys.filter((e) => e !== value)
                })
                selectCity = selectCity.filter((e) => e !== value);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const [permissions, setPermissions] = useState([]);

    const handleCityFilter = async (e) => {
        const { value, checked } = e.target;
        let citys = cityFilter.slice();
        console.log("My  citys== ===>", citys)
        citys.map((item, index) => {
            if (item.title === value) {
                citys[index].is_checked = checked
            }
        });
        selectedCityList = citys.filter((item, index) => item.is_checked && item.title).map((item, index) => item.title);
        handlerCarCategary();
        console.log("My ", selectedCityList)
    }

    const handleSeatsFilter = async (e) => {
        const { value, checked } = e.target;
        let seats = carSeaterList.slice();
        console.log("My  citys== ===>", value)
        seats.map((item, index) => {
            if (item.title === value) {
                seats[index].is_checked = checked
            }
        });
        selectedSeatsList = seats.filter((item, index) => item.is_checked && item.title).map((item, index) => item.title)
        handlerCarCategary();
        console.log("My ", selectedSeatsList)
    }

    const handleCheck = async (event) => {
        var permissions_array = [...permissions];
        // console.log(permissions_array);
        if (event.target.checked) {
            permissions_array = [...permissions, event.target.value];
            // console.log("if", permissions_array);
        } else {
            permissions_array.splice(permissions.indexOf(event.target.value), 1);
            // console.log("else", permissions_array);
        }
        setPermissions(permissions_array);
        console.log("my data city=>", permissions_array);
        if (permissions_array) {
            const url = 'display-carlist?city=' + permissions_array;
            const data = await FetchApi(url, "", {
                method: "GET",
            })

            // setCarItems(data)
            console.log("my res", data);
        }
    };

    useEffect(() => {
        handlerListOfCars()

    }, [])




    return (
        <>
            <div className="container background-image  d-flex ">
                <div className='my-list ' >
                
                    {
                        carItems && carItems.length > 0 ?
                            (
                                <div>
                                    {/* <h3 id='title-h3 black-text'>CATEGARY</h3> */}
                                    <div className='categary-name' id='btn-cat' >
                                        <button className="categary-type mx-2" value="all cars" onClick={(e) => { handlerCarCategary() }} >All Cars</button>
                                        <button className='categary-type mx-2' value="Renault" onClick={(e) => { handlerCarCategary(e.target.value) }}>Renault </button>
                                        <button className='categary-type mx-2' value="Honda" onClick={(e) => { handlerCarCategary(e.target.value) }}>Honda</button>
                                        <button className='categary-type mx-2' value="Maruti" onClick={(e) => { handlerCarCategary(e.target.value) }}>Maruti</button>
                                        <button className='categary-type mx-2' value="Hyundai" onClick={(e) => { handlerCarCategary(e.target.value) }}>Hyundai</button>
                                        <button className='categary-type mx-2' value="Mahindra" onClick={(e) => { handlerCarCategary(e.target.value) }}>Mahindra</button>
                                    </div>
                                    <hr />
                                    <div className='mainContaineInCar'>
                                        <div className='yourCar-filterbar-container'>
                                            <div className='car-seat-filter'>
                                                <h6>Car Seat</h6>
                                                {
                                                    carSeaterList.map((item, index) => {
                                                        return (
                                                            <div key={index}>

                                                                <CustomCheckBox
                                                                    value={item.title}
                                                                    onChange={handleSeatsFilter}
                                                                >
                                                                    {item.title}
                                                                </CustomCheckBox>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='city-filter'>
                                                <h6>City</h6>
                                                {
                                                    cityFilter.map((item, index) => {
                                                        return (
                                                            <div key={index}>
                                                                {/* 
                                                                <CustomCheckBox
                                                                    key={index}
                                                                    onClick={() => handleCityChange(!checkedCities[item.title], item)}
                                                                    checked={checkedCities[item.title] || false}
                                                                    value={item.title}
                                                                >{item.title}</CustomCheckBox> */}
                                                                <CustomCheckBox
                                                                    value={item.title}
                                                                    onChange={handleCityFilter}
                                                                // onChange={handleCheck}
                                                                >{item.title}</CustomCheckBox>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>

                                        <div className=' text-white' id='main-sceen'>
                                            {
                                                carItems.length > 0 && (
                                                    <div className='item-list ' >
                                                        {carItems.map((items, index) =>

                                                        (
                                                            items.onStatus !== "Offline" && (
                                                                <>
                                                                    <div className={`mx-3  my-2 car-fram `} id="car-fram" >
                                                                        <div >

                                                                            < img src={AppConfig.BASE_URL + "carImage/" + items.image[0]} className="card-img-top" alt="..." />
                                                                            <p >{items.carName}</p>
                                                                            <div className='item-title'>
                                                                                <div className=''>
                                                                                    <p>Exterior: {items.exteriorColor}</p>
                                                                                    <p>Interior : {items.interiorColor}</p>
                                                                                </div>
                                                                                <div style={{ marginLeft: "0.1rem" }}>
                                                                                    <p>Seats: {items.seats}</p>
                                                                                    <p >City : {items.city}</p>
                                                                                </div>
                                                                            </div>
                                                                            <p style={{ fontWeight: "bold" }}>Per Day Rate:  {items.schedule}₹</p>
                                                                            {items.isBooked ? (
                                                                                <>

                                                                                    <p className='isBooked'>Booked Slot</p>
                                                                                    <p className='isBooked'>Available on  {items.onAvailble.days} day {items.onAvailble.hours} hours </p>

                                                                                </>
                                                                            ) :
                                                                                <>
                                                                                    <div style={{ display: "flex" }} className=''>

                                                                                        <CustomButton onClick={(e) => { handlerCarDetailWithShare(items._id, "Yes") }} > Rent With Share</CustomButton>
                                                                                        <CustomButton onClick={(e) => { handlerOneCarDetails(items._id) }} > Rent It</CustomButton>
                                                                                    </div>
                                                                                </>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        ))}

                                                    </div>
                                                )
                                            }



                                        </div>
                                    </div>
                                    {/* <SlideImage/> */}


                                </div>
                            ) :
                            (
                                <div className='notFound'>

                                    <img src="/image/dataNotFound.png" alt="" />

                                </div>
                            )
                    }

                </div>
            </div>

        </>
    )
}

export default CarsList;