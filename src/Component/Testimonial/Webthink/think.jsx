import "./_think.scss";


import hall from "../../../assets/about/hero_1.jpg.webp";

import humanbrain from "../../../assets/service/image/psychology.png";
import light_bulb from "../../../assets/service/image/light-bulb.png";


export const Think=()=>{
    return(
        <main className="container think">
            <div className="d-flex justify-content-between align-items-center">
            <section className="row">
                    <article className="col-lg-6">
                    <img className="mb-3" src={humanbrain} alt="humanbrain not found" />
                       <h5 className="fw-normal mb-3">Web & Mobile Specialties</h5>
                       <p className="text-muted fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis consect.</p>
                       <p className="text-primary">Learn More</p>
                    </article>
                    <article className="col-lg-6">
                    <img className="mb-3" src={light_bulb} alt="humanbrain not found" />
                       <h5 className="fw-normal mb-3">Intuitive Thinkers</h5>
                       <p className="text-muted fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.</p>
                       <p className="text-primary">Learn More</p>
                    </article>
                </section>
                
                <section className="mx-6 col-lg-6">
                    <img className="img-fluid" src={hall} alt="Not found"/>
                </section>
            </div>

        </main>
    );
}