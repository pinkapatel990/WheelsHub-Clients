import React, { useState } from 'react'
import './index.css'

export default function RentAndBuyCar() {
  const [contectShow, setContectShow] = useState(false)

  const handlerclickButton = () => {
    try {
      setContectShow((prevState) => !prevState);
      // setContectShow(true)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className='BuyAndSellTabDesktop__buyAndSellTabDesktopContainer'>
        {/* <div className='BuyAndSellTabDesktop__tab'>
          <button className={!contectShow ? 'active' : "BuyAndSellTabDesktop"} onClick={handlerclickButton}>Buy Budget Car</button>
          <button className={contectShow ? 'active ' : "BuyAndSellTabDesktop"} onClick={handlerclickButton}>Rent Car</button>
          <div className='BuyAndSellTabDesktop__tabIndicator' style={{ transform: " translateX(0%)", left: "6px" }} >

          </div>
        </div> */}
        {contectShow ?
          <div className='BuyAndSellTabDesktop__buySellTab w3-container w3-center  w3-animate-left'>
            <div className='BuyAndSellTabDesktop__buySellTab' style={{ left: "0px" }}>
              <div>
                <div className="BuyCarTabDesktop__BuyCarTabDesktop">
                  <h2 class="BuyCarTabDesktop_h2">WheelsHub Benefits</h2>
                  <ul className='BuyCarTabDesktop__benefits'>
                    <li>
                      <div>
                        <div className='BuyCarTabDesktop__iconContainer'>
                          <img src="icons/affot.png" alt="not found" className='buycarImage' />

                        </div>
                        <div className='BuyCarTabDesktop__content'>
                          <div className='BuyCarTabDesktop__heading'>
                            <strong >Affordability</strong>
                            <p className='BuyCarTabDesktop__benefitDescription'> Budget cars are typically more affordable than their higher-end counterparts.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className='BuyCarTabDesktop__iconContainer'>
                          <img src="icons/cost.jpg" alt="" height="150" className='buycarImage' />

                        </div>
                        <div className='BuyCarTabDesktop__content'>
                          <div className='BuyCarTabDesktop__heading'>
                            <strong > Lower Oprating Cost</strong>
                            <p className='BuyCarTabDesktop__benefitDescription'> Budget cars often come with lower operating costs.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className='BuyCarTabDesktop__iconContainer'>
                          <img src="icons/resale.jpg" alt="" height="150" className='buycarImage' />

                        </div>
                        <div className='BuyCarTabDesktop__content'>
                          <div className='BuyCarTabDesktop__heading'>
                            <strong>Resale Value</strong>
                            <p className='BuyCarTabDesktop__benefitDescription'>they often maintain relatively good resale value due to their affordability and practicality.</p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div className='BuyCarTabDesktop__iconContainer'>
                          <img src="icons/car3.png" alt="" className='buycarImage' />

                        </div>
                        <div className='BuyCarTabDesktop__content'>
                          <div className='BuyCarTabDesktop__heading'>
                            <strong>Variety Car</strong>
                            <p className='BuyCarTabDesktop__benefitDescription'> There is a wide range of budget cars available offering various styles, sizes, and features to suit different preferences and needs. </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          : <>
            <div className='BuyAndSellTabDesktop__buySellTab w3-container w3-center w3-animate-right'>
              <div className='BuyAndSellTabDesktop__buySellTab' style={{ left: "0px" }}>
                <div>
                  <div className="BuyCarTabDesktop__BuyCarTabDesktop">
                    <h2 class="BuyCarTabDesktop_h2">WheelsHub Benefits</h2>
                    <ul className='BuyCarTabDesktop__benefits'>
                      <li>
                        <div>
                          <div className='BuyCarTabDesktop__iconContainer'>
                            <img src="icons/fast.jpg" alt="" className='buycarImage' />

                          </div>
                          <div className='BuyCarTabDesktop__content'>
                            <div className='BuyCarTabDesktop__heading'>
                              <strong>Fast Booking </strong>
                              <p className='BuyCarTabDesktop__benefitDescription'> Every car is fast booking no need to wait for booking time.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className='BuyCarTabDesktop__iconContainer'>
                            <img src="icons/choose.png" alt="" height="150" className='buycarImage' />

                          </div>
                          <div className='BuyCarTabDesktop__content'>
                            <div className='BuyCarTabDesktop__heading'>
                              <strong>Choose By Self</strong>
                              <p className='BuyCarTabDesktop__benefitDescription'> We are facilitate to choose car by self.You can book your favorite car.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div>
                          <div className='BuyCarTabDesktop__iconContainer'>
                            <img src="icons/access.png" alt="" height="150" className='buycarImage' />

                          </div>
                          <div className='BuyCarTabDesktop__content'>
                            <div className='BuyCarTabDesktop__heading'>
                              <strong>Access AnyWhere</strong>
                              <p className='BuyCarTabDesktop__benefitDescription'>You can book anytime any place.we are facilitate to access anywhere.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li> 
                        <div>
                          <div className='BuyCarTabDesktop__iconContainer'>
                            <img src="icons/confort3.png" alt="" className='buycarImage' />

                          </div>
                          <div className='BuyCarTabDesktop__content'>
                            <div className='BuyCarTabDesktop__heading'>
                              <strong>Comfort</strong>
                              <p className='BuyCarTabDesktop__benefitDescription'>We are give full of comfort car and make your trip enjoyful.</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>}
      </div>

    </>
  )
}
