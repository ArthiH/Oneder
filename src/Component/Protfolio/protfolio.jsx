import "./_protfolio.scss";

import img_1 from "../../assets/protfolio/image/img_1.jpg.webp";
import img_2 from "../../assets/protfolio/image/img_2.jpg.webp";
import img_3 from "../../assets/protfolio/image/img_3.jpg.webp";
import img_4 from "../../assets/protfolio/image/img_4.jpg.webp";
import img_5 from "../../assets/protfolio/image/img_5.jpg.webp";
import img_6 from "../../assets/protfolio/image/img_6.jpg.webp";
import img_7 from "../../assets/protfolio/image/img_7.jpg.webp";
import img_8 from "../../assets/protfolio/image/img_8.jpg.webp";
import img_9 from "../../assets/protfolio/image/img_9.jpg.webp";
import img_10 from "../../assets/protfolio/image/img_10.jpg.webp";
import img_11 from "../../assets/protfolio/image/img_11.jpg.webp";
import img_12 from "../../assets/protfolio/image/img_12.jpg.webp";
import img_13 from "../../assets/protfolio/image/img_13.jpg.webp";



export const Protfolio=()=>{
    return(
        <main className="container protfolio" id="protfolio">
          <section className="d-flex flex-column justify-content-center align-items-center heading ">
            <h1 className="text-primary">Protfolio</h1>
           <div className="d-flex gap-3 my-4 text-black align-items-center">
            <button className="btn  rounded-pill px-3 " type="button">All</button>
            <button className="btn  rounded-pill px-3" type="button">Web</button>
            <button className="btn  rounded-pill px-3" type="button">Design</button>
            <button className="btn  rounded-pill px-3" type="button">Brand</button>
          </div>
          </section>
          <div className="d-flex images">
             <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 mb-4 mb-lg-0">
                 <img src={img_1} className="w-100  shadow-1-strong rounded mb-4 mt-3" alt="img_1 not found"/>
                 <img src={img_5} className="w-100  shadow-1-strong rounded mb-4" alt="img_5 not found"/>
                 <img src={img_11} className="w-100  shadow-1-strong rounded mb-4" alt="img_11 not found"/>
             </div>
             <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 mx-2 mb-4 mb-lg-0">
                 <img src={img_2} className="shadow-1-strong rounded mb-4 mt-3" alt="img_2 not found"/>
                 <img src={img_6} className="shadow-1-strong rounded mb-4" alt="img_6 not found"/>
                 <img src={img_12} className="shadow-1-strong rounded mb-4" alt="img_12 not found"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 mb-4 mx-2 mb-lg-0">
                 <img src={img_3} className="w-100 shadow-1-strong rounded mb-4 mt-3" alt="img_3 not found"/>
                 <img src={img_8} className="w-100 shadow-1-strong rounded mb-4" alt="img_8 not found"/>
                 <img src={img_10} className="w-100 shadow-1-strong rounded mb-4" alt="img_10 not found"/>
                 <img src={img_13} className="w-100 shadow-1-strong rounded mb-4" alt="img_13 not found"/>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xl-3 mb-4 mx-2 mb-lg-0">
                <img src={img_4} className="w-100 shadow-1-strong rounded mb-4 mt-3" alt="img_4 not found"/>
                <img src={img_7} className="w-100 shadow-1-strong rounded mb-4" alt="img_7 not found"/>
                <img src={img_9} className="w-100 shadow-1-strong rounded mb-4" alt="img_9 not found"/>
                
            </div>
          </div>
          
        </main>
    );
}