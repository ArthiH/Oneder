import "./_navbar.scss";

import { Link } from "react-router-dom";


export const Navbar=()=>{
    return(
            <nav className=" nav">
                <article className="container  ">
                    <section className="d-flex justify-content-between align-items-center my-3">
                        <h1 className="fs-3 text-white logo">ONEDER</h1>
                        <section className="navbar-expand ">
                            <ul className="navbar-nav d-flex gap-5 list fw-normal">
                                <li><Link to="" className="active">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="protfolio">Protfolio</Link></li>
                                <li><Link to="service">Service</Link></li>
                                <li><Link to="testimonial">Testimonial</Link></li>
                                <li><Link to="blog">Blog</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                                
                            </ul>
                            
                        </section>
                    </section>
                </article>
           </nav>
    );
}