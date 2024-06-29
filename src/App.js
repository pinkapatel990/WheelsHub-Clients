import { BrowserRouter  ,Route,Switch,Routes } from 'react-router-dom';
import './App.css';
import Register from './components/pages/Register';
import Header from './components/Header';
import Dashbord from './components/pages/Dashbord';
import CarsList from './components/pages/CarsList';
import Login from './components/pages/Login';
import CarDetails from './components/pages/CarDetails';
import CarBoking from './components/pages/CarBoking';
import BookingConfiem from './components/pages/BookingConfiem';
import ContactUs from './components/pages/ContactUs';
import PageLoader from './components/PageLoader';
import MyAccount from './components/pages/MyAccount';
import Updatepassword from './components/pages/Updatepassword';
import AboutUs from './components/pages/AboutUs';
import ServerError from './components/Errors/ServerError';
import Gallery from './components/pages/Gallery'
import All from './components/pages/GelleryImage/All'
import Honda from './components/pages/GelleryImage/Honda';
import MarutiSuzuki from './components/pages/GelleryImage/MarutiSuzuki'
import Mahindra from './components/pages/GelleryImage/Mahindra';
import Tata from './components/pages/GelleryImage/Tata'
import Toyota from './components/pages/GelleryImage/Toyota';
import RentAndBuyCar from './components/pages/Dashbord/Rent&Buy';
import Contact from './components/pages/Contact'
import Team from './components/pages/Team';
import FAQ from './components/pages/FAQ';



function App() {
  return (
  
    <BrowserRouter>
      <Head
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      er />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashbord />} />
        <Route path="/cars-list" element={<CarsList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car-details" element={<CarDetails />}  />
        <Route path="/car-booking-status" element={<CarBoking />} />
        <Route path="/booking-confiem" element={<BookingConfiem/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        {/* <Route path="/contact" element={<Contact/>} /> */}
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/update-password" element={<Updatepassword/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/server-error" element={<ServerError/>}/>
        <Route path="/page-loader" element={<PageLoader/>}/>
        <Route path="/gallery" element={<All/>}/>
        {/* <Route path="/team" element={<Team/>}/> */}
        <Route path="/faq" element={<FAQ/>}/>

      <Route path="/all" element={<All/>}/>
      <Route path='/honda' element={<Honda/>}/>
      <Route path='/MarutiSuzuki' element={<MarutiSuzuki/>}/>
      <Route path="/Mahindra" element={<Mahindra/>}/>
      <Route path="/Tata" element={<Tata/>}/>
      <Route path="/Toyoto" element={<Toyota/>}/>

        </Routes>
    </BrowserRouter>

  );
}

export default App;
