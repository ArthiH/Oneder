import "./_contact.scss";

import { ContactUs } from "./Contact_us/contact_us";

import {IoLocationSharp} from "@react-icons/all-files/io5/IoLocationSharp";
import {FaPhoneAlt} from "@react-icons/all-files/fa/FaPhoneAlt";
import {FiMail} from "@react-icons/all-files/fi/FiMail";


export const Contact=()=>{
    return(
        <main className="contact">
           <div className="container py-3">
           <h1 className="text-primary text-center py-5">Contact Us</h1>
            <section className="d-flex justify-content-center align=items-center my-4">
                <article className="col-lg-4 text-center">
                    <p className="text-primary fs-4"><IoLocationSharp/></p>
                    <p className="text-muted fw-normal"> 203 Fake St. Mountain View, San Francisco, California, USA </p></article>
                <article className="col-lg-4 text-center">
                    <p className="text-primary fs-4"><FaPhoneAlt/></p>
                    <p className="text-primary">+1 232 3235 324</p>
                </article>
                <article className="col-lg-4 text-center">
                    <p className="text-primary fs-4"><FiMail/></p>
                    <p className="text-primary">youremail@domain.com</p>
                </article>
            </section>
            <section className="bg-white w-90 p-5 ">
                <p className="fs-4">Contact</p>
              <div className="row mb-4">
              <article className="col-lg-6">
                <label htmlFor="first_name" className="py-2">First Name</label><br/>
                <input type="text" className="form-control txt p-2" id="first_name"/>
                </article>
                <article className="col-lg-6">
                <label htmlFor="last_name" className="py-2">Last Name</label><br/>
                <input type="text" className="form-control txt p-2" id="last_name"/>
                </article>
              </div>
              <article className="mb-4" >
                <label htmlFor="email" className="py-2">Email</label><br/>
                <input type="email" className="form-control txt p-2" id="email"/>
                </article>
              <article className="mb-4">
                <label htmlFor="subject" className="py-2">Subject</label><br/>
                <input type="email" className="form-control txt p-2" id="subject"/>
                </article>
              <article >
                <label htmlFor="message" className="py-2">Message</label><br/>
                <textarea className="form-control" id="exampleFormControlTextarea1 message" rows="5"></textarea>
                </article>
                <button className="btn bg-primary text-white my-4 rounded-pill px-4 py-2">Send Message</button>
            </section>
           </div>
           <ContactUs/> 
        </main>
    );
}