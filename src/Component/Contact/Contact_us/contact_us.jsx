import "./_contact_us.scss";

import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

export const ContactUs=()=>{
    return(
        <main className="bg-dark py-5 contactus">
            <div className="container">
                <section className="row txt ">
                    <article className="col-lg-4 mb-2">
                        <p className="text-white fw-light">About Us</p>
                        <p className="text-muted ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
                    </article>
                    <article className="col-lg-2 mb-3">
                        <p className="text-white fw-light">Quick Links</p>
                        <ul className="navbar-nav text-muted">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Testimonial</li>
                            <li>Contact Us</li>
                        </ul>
                    </article>
                    <article className="col-lg-3 mb-4">
                        <p className="text-white fw-light">Follow Us</p>
                        <section className="text-muted fs-5">
                        <span className="icon"><RiFacebookFill/></span>
                        <span className="icon"><RiTwitterFill/></span>
                        <span className="icon"><RiInstagramLine/></span>
                        <span className="icon"><RiLinkedinFill/></span>
                        </section>
                    </article>
                    <article className="col-lg-3 mb-2">
                        <p className="text-white fw-light">Subscribe Newsletter</p>
                        <div class="border rounded-pill mb-2">
                            <input className="my-1 px-3 border-0 bg-transparent text-muted fs-6" type="text" placeholder="Enter Email"/>
                        <button className="p-2 text-center bg-white border-0">Send</button>
                        </div>    
                     </article>
                </section>
                <hr className="text-muted"/>
                <p className="text-muted text-center my-5">Copyright ©2023 All rights reserved | This template is made with <span className="text-danger"><AiFillHeart/></span> by Colorlib</p>
            </div>
        </main>
    );
}