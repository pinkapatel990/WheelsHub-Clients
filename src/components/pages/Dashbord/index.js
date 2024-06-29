// import React, { useState } from 'react'
// import Button from '../../Element/CustomButton'
import Footer from '../../Footer'
import './index.mudel.css'
// import AppConfig from '../../../constants/AppConfig'
import PickCar from './PickCar'
import Service from './Service'
import About from './About'
import TopBennar from './TopBennar'
import Footer2 from '../../Footer2'
import RentAndBuyCar from './Rent&Buy'


export default function Dashbord() {

  
  return (

    <>
     <TopBennar/>
      <About/>
      <RentAndBuyCar/>
      <PickCar/>
      <Service/>
      <Footer2/>
    </>
  )
}
