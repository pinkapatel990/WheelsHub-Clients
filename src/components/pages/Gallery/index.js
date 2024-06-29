import "./GalleryCss.css";
import { Link } from 'react-router-dom';
import '../../pages/GelleryImage/All/AllCss.css';
import All from "../GelleryImage/All";


export default function Gallery() {
    return (
        <>

            <div className="gallery">

                <div className="bgImage">
                    <ul>
                        <h2>Gallary</h2>
                        <Link to="/">Home </Link> <Link to="/Gallery">/Gallery</Link>
                    </ul>


                </div>
                <div className="header">
                    <ul>
                        <Link to="/all">All</Link>
                        <Link to="/MarutiSuzuki">Maruti Suzuki</Link>
                        <Link to="/honda">Honda</Link>
                        <Link to="/Mahindra">Mahindra</Link>
                        <Link to="/Tata">Tata</Link>
                        {/* <Link to="/Toyota">Toyota</Link> */}


                    </ul>


                </div>

            </div>
                {/* <All/> */}
            

        </>
    )
}