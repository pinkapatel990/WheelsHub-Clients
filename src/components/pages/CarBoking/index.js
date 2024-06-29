import { useEffect, useState } from 'react';
import './index.modul.css'
import FetchApi from '../../../constants/FetchApi';
import SideNavbar from '../../SideNavber';
const CarBoking = () => {


    const [carStatus, setCarStatus] = useState([])
    const hanlarCarBookingStatus = async () => {

        const data = await FetchApi("car-booking-status", "", {
            method: "GET"
        })
        console.log("my bookinh data==>",data)
        if (data && data.status === 200) {
            const bookingDetails = data.bookingDetails || [];
            setCarStatus(bookingDetails)
        }
    }
    const isDataEmpty = !carStatus || carStatus.length === 0;

    function formatDate(date) {
        const day = date.getDate();
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear().toString().slice(-2);

        return `${day}-${month}-${year}`;
    }

    useEffect(() => {
        hanlarCarBookingStatus()
    }, [])
    return (
        <>
            <div className="d-flex body-main">
                <SideNavbar />
                <div className="main-rides"  >
                    <h3 className='trip-head'>My Trip</h3>
                    <div id='my-scroll' className='horizontal-scroll'   >
                        <div className='main-text' >
                            <table className='table'>
                                <thead  class="theam">
                                    <th scope="col">Date</th>
                                    <th scope="col">Name Of Car</th>
                                    <th scope="col">From</th>
                                    <th scope="col">CRN</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Pickup Time</th>
                                </thead>
                                {isDataEmpty ? (

                                    <h3 className='not-status'>Looks like you haven't taken a trip yet.</h3>
                                ) : (

                                    <>
                                        {carStatus && carStatus.length > 0 && carStatus.sort((a, b) => {
                                            return b.pickupDate.localeCompare(a.pickupDate) || b.pickupTime.localeCompare(a.pickupTime)
                                        }).map((data, index) => {
                                            return (
                                              
                                                <>
                                               
                                                    <tbody key={index}>
                                                        <tr className=''>
                                                            <td scope="row">{formatDate(new Date(data.pickupDate))}</td>
                                                            <td >  <img src="/image/caravatar.png" alt="" className='img-car' id='car-img' />{data.carName.slice(0, 10) + '...'}</td>
                                                            <td >
                                                                <i className="fas fa-map-marker mx-2"></i>
                                                                {data.from.slice(0, 10) + '...'}

                                                            </td>

                                                            <td >{data.driveNO}</td>
                                                         
                                                            <td >₹{data.totalPrice}</td>
                                                            <td> {data.status === 'Accepted' ?
                                                                (<span className='status-item'>success</span>)
                                                                : data.status === 'Cancel' ?
                                                                    (<span className='status-pro'>Cencal</span>)
                                                                    : (<span className='status-pro'>Proccess</span>)
                                                            }</td>
                                                            <td>{data.pickupTime}</td>
                                                        </tr>
                                                   
                                                    </tbody>
                                                   
                                                </>
                                               
                                            )
                                        })}
                                    </>
                                   
                                )}
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CarBoking; 