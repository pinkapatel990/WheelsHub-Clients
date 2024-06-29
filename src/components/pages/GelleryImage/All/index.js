import "./AllCss.css";
import Gallery from "../../Gallery";
export default function All(){
    return(
        <>
        <div className="All">

        <div className="header">
        <Gallery/>
        </div>

        <div className="images"> 
            <div className="subCar1"></div>
         <div className="subCar2">
            <img src="car/c1.webp" alt="sdf" />
         </div>
         <div className="subCar3"></div>

            </div>


            <div className="images1"> 
            <div className="subCar4"></div>
         <div className="subCar5"></div>
         <div className="subCar6"></div>

            </div>
        </div>

 
            
        </>
    )
}