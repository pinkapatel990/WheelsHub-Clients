
import "./index.css";
import { Link } from 'react-router-dom';

export default function Footer2(){
    return(
        <><div className="mainFooter">
            <div className="footer"> 
            <div className="container1">
               <h2 style={{color:"white"}}>WheelsHub</h2> 
               <p>We Provide Best Cars With The Best Prices. We Are Expert In Car Rental. Enjoy Your Holidays With Us. We Make Your Drive Memorable. We Care For Your Safety.</p>
            
               <i className='fa fa-facebook'></i><i className='fa fa-twitter'></i>
   <i className='fa fa-youtube'></i>
   <i className='fa fa-linkedin-square'></i>
            </div>
            <div className="container2">
                <h1>Useful links</h1>
                <div className="AllLink">
                <ul>
            <li> <Link to="/Team">Team</Link></li>
            <li><Link to="/About">About Us</Link></li> 
            <li><Link to="/Contact">Conatact Us</Link></li> 
           
             </ul>
             <ul>
             <li><Link to="/Gallery">Gallery</Link></li> 
             <li><Link to="/Faq">FAQ</Link></li> 
             </ul>
             </div>
            </div>
            <div className="container3">
                <h1>SignUp Your Email</h1> 
                <input type="email" placeholder="Enter your email" required></input><br></br>
                <button>Subscribe</button>
            </div>
            </div>

            <div>

            </div>
            <div className="red">
            {/* <h1>CopyRight ©2024;</h1> */}

            </div>

            </div>
        </>
    )
}