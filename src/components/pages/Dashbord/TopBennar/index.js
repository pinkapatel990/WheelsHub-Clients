import React from 'react'
import AppConfig from '../../../../constants/AppConfig';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function TopBennar() {
    const MY_DOMAIN = AppConfig.SUB_DOMAIN;
    const [city, setCity] = useState('Select city')

    console.log("my select city here", city);

    const handlerCityWise = () => {
        if (city === "Select city") {
            window.location.href = MY_DOMAIN + "cars-list"
        } else {
            window.location = window.location.href.split('?')[0] + "?q=" + city;//this is split location in the  array and get 0 position data
            window.location.href = MY_DOMAIN + "cars-list?city=" + city;//we are passing query on city data
            console.log("my city data == >", city);
            console.log("my href ===>", window.location);
        }

    }
    const getCity = (e) => {
        console.log("my event is ==>", e);
        const value = e.target.innerText;
        setCity(value)
    }
    return (


        <>
            <div className="banner-image w-100 vh-100 d-flex justify-content-left align-items-center" >
                <div className='justify-content-left align-items-center display-content' id='display'>
                    <div className="text-left" id='text-head'>
                        <p className='text-white text-head' id='header-dashbord'>Find Right Choose Cars For Rent At Low Prices</p>
                        {/* <h4 className='text-white text-mini' id='title-dashbord'>Fast & Easy Way To Rent A Car</h4> */}
                        <h5 className='text-white text-third'  >Ready to hit the road? Browse our fleet and book <br />your perfect car today.</h5>
                    </div>
                    <p className='line-dash'></p>
                    <div style={{ display: "flex" }} className='my-drop'>

                        <div className="hm-search-heading2">
                            <div className="my-btn-drop">
                                <button
                                    className="home-searchBtn-container"
                                >{city} <i className="fas fa-caret-down dropIcon"></i></button>
                                <div className="my-city-content1 "  >
                                    <p onClick={getCity}>Surat</p>
                                    <p onClick={getCity}>Ahembadab</p>
                                    <p onClick={getCity}>Bardoli</p>
                                    <p onClick={getCity}>Mumbai</p>
                                </div>
                            </div>
                        </div>
                        <div className="hm-search-heading2">
                            <Button className="city-btn" onClick={handlerCityWise} >FIND CARS  </Button>
                        </div>
                        <div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
