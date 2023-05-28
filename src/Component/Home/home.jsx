
import Home_image from "../../assets/home/image/home-cover-image.webp";


import "./_home.scss";
import { About } from "../About_us/about";
import { Protfolio } from "../Protfolio/protfolio";
import { Service } from "../Service/service";
import { Testimonial } from "../Testimonial/testimonial";
import { Blog } from "../Blog/blog";
import { Contact } from "../Contact/contact";
import { Navbar } from "../Navbar/navbar";

export const Home=()=>{
    return(
        <main>
            <Navbar/>
            <div>
                <img className="w-100 position-relative" src={Home_image} alt="Home images not found" />
            <div className="container content">
                <section className="position-absolute top-50 start-50 translate-middle d-flex row">
                    <h1 className="text-center text-white">I'M CREATIVE ONE PAGE</h1>
                    <h1 className="text-center text-white">TEMPLATE</h1>
                    <article className="d-flex justify-content-center btn ">
                        <button className="text-white">Get In Touch</button>
                    </article>
                </section>
            </div>
        </div>
        <About/>
      <Protfolio/>
      <Service/>
      <Testimonial/>
      <Blog/>
      <Contact/>
        </main>
    );
}
