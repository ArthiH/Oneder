import "./_test.scss";

import person_1 from "../../assets/test/image/person_1.jpg";
import { Pricing } from "./Pricing/pricing";
import { Freq } from "./Freq/freq";
import { Think } from "./Webthink/think";

export const Testimonial=()=>{
    return(
        <div>
            <main className="container d-flex justify-content-center align-items-center my-5 py-3" id="testimonial">
            <section className="d-flex justify-content-center align-items-center flex-column testimonial ">
            <h1 className="mb-4 text-primary">Testimonials</h1>
                <p className="text-center fs-4 text-muted mt-4 fst-italic">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p>
                <article className="text-center my-4">
                <img className="rounded-circle mx-3" src={person_1} alt="person_1 not found"/><span className="text-muted mx-3">John Smith</span>
                </article>
                <article className="d-flex  owl-dot my-4">
                    <div className=" mx-1 rounded-circle">
                     <span ></span>
                    </div>
                    <div className=" mx-1 rounded-circle ">
                     <span ></span>
                    </div>
                    <div className=" mx-1 rounded-circle ">
                     <span ></span>
                    </div>
                    <div className=" mx-1 rounded-circle ">
                     <span ></span>
                    </div>
                </article>
            </section>
        </main>
        <Pricing/>
        <Freq/>
        <Think/>
        </div>
    );
}