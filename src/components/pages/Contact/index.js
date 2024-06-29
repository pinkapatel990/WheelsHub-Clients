import "./ContactCss.css";
import { Link } from "react-router-dom";

export default function Contact() {
   return (
      <>
         <div className="backImg">
            <ul> <Link to="/Home">Home</Link><Link to="/Contact">/ Contact Us</Link></ul>
         </div>

         <div className="contact">
            <div className="form">
               <h1>Get In Touch</h1>
               <input type="text" placeholder="Name" id="name"></input>
               <input type="email" placeholder="Email" id="email"></input><br></br><br></br>
               <input type="text" placeholder="Subject" id="subject" ></input><br></br><br></br>
               <textarea placeholder="Message" ></textarea>
               <button>Send Me</button>
            </div>

            <div className="map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54593250495!2d72.73972409994003!3d21.15918012092405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699522269971!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>


            </div>

         </div>
      </>
   )
}