import React from 'react'
import './index.css'

export default function Service() {
    return (
        <div className='main'>

            <div className="service">
                <h3>what we offer</h3>
                <h1>Our services</h1>

                <div className="container">
                    <div className="row">

                        <div class="col-md-2">
                            <div className="txt">
                                <h4>Variety Of Cars</h4>
                                <p>We provide a diverse range of cars to suit every lifestyle and preference.we have the perfect vehicle for you.</p>

                            </div>
                            <div className="icon1"></div>

                        </div>
                        {/* ******************* second icon ***************** */}
                        <div class="col-md-2">
                            <div className="txt">
                                <h4>Best Quality Of Cars</h4>
                                <p>We are facilitate besquality of car. we are value your every trip.</p>

                            </div>
                            <div className="icon2"></div>
                        </div>

                        {/* ************************* third icon ****************** */}
                        <div class="col-md-2">
                            <div className="txt">
                                <h4>Reservation Anytime</h4>
                                <p>You no need any location and any fix time you can book car anywhere anytime.</p>

                            </div>
                            <div className="icon3"></div>
                        </div>

                        {/* ******************** fourth icon ************************* */}
                        <div class="col-md-2">

                            <div className="txt">
                                <h4>Best Price guarantee</h4>
                                <p>There is diffrant car and diffrent price.You can book car in your range. </p>

                            </div>
                            <div className="icon4"></div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}
