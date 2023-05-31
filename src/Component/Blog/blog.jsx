import "./_blog.scss";

import img_1 from "../../assets/protfolio/image/img_1.jpg.webp";
import img_2 from "../../assets/protfolio/image/img_2.jpg.webp";
import img_3 from "../../assets/protfolio/image/img_3.jpg.webp";

export const Blog=()=>{
    return(
        <main className="container blog" id="blog">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="mb-4 text-primary">Our Blog</h1>
            </div>
            <section className="row">
                <article className="card-body col-lg-4">
                <img src={img_1} className="w-100  shadow-1-strong rounded mb-4 mt-3" alt="img_1 not found"/>
                <h5 className="fw-normal mt-2">Repudiandae Quisquam Eaque Dolore</h5>
                <p className="text-muted small">Ham Brook • Jan 18, 2019 • <span className="text-primary">News</span></p>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p className="text-primary">Continue Reading...</p>
                </article>
                <article className="card-body col-lg-4">
                <img src={img_2} className="shadow-1-strong rounded mb-4 mt-3" alt="img_2 not found"/>
                <h5 className="fw-normal mt-2">Repudiandae Quisquam Eaque Dolore</h5>
                <p className="text-muted small">James Phelps • Jan 18, 2019 • <span className="text-primary">News</span></p>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p className="text-primary">Continue Reading...</p>
                </article>
                <article className="card-body col-lg-4">
                <img src={img_3} className="w-100 shadow-1-strong rounded mb-4 mt-3" alt="img_3 not found"/>
                <h5 className="fw-normal mt-2">Repudiandae Quisquam Eaque Dolore</h5>
                <p className="text-muted small">James Phelps • Jan 18, 2019 • <span className="text-primary">News</span></p>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
                <p className="text-primary">Continue Reading...</p>
                </article>
            </section>
        </main>
    );
}