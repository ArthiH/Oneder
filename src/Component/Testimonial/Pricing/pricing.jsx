import "./_pricing.scss";

import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark";
import { IoCheckmark } from "@react-icons/all-files/io5/IoCheckmark";

export const Pricing=()=>{
    return(
        <main className="pricing">
            <div className="container ">
                <section>
                    <div className="d-flex justify-content-center align-items-center">
                    <h1 className="text-center text-primary my-5">Pricing</h1>
                    </div>
                    <article className="d-flex gap-4 card-body">
                        <section className="bg-white p-3 col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-center fs-4 pt-4">Basic</h6>
                            <p className="text-center py-2 text-primary price ">$47 <span className=" yr">/ year</span></p>
                            <div className="text-muted" >
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd >Officia quaerat eaque neque</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd >Possimus aut consequuntur incidunt</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 strike fs-5"><IoCheckmark/></dt>
                                <dd className="text-decoration-line-through strike">Lorem ipsum dolor sit amet</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 strike fs-5"><IoCheckmark/></dt>
                                <dd className="text-decoration-line-through strike">Consectetur adipisicing elit</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 strike fs-5"><IoCheckmark/></dt>
                                <dd className="text-decoration-line-through strike">Dolorum esse odio quas architecto sint</dd>
                            </dl>
                            </div>
                            <article className="d-flex justify-content-center">
                            <button className="btn bg-secondary text-white rounded-pill text-center my-4 px-4">Buy Now</button>
                            </article>
                        </section>
                        <section className="bg-white p-3 col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-center fs-4 pt-4">Premium</h6>
                            <p className="text-center py-2 text-primary price ">$200 <span className=" yr">/ year</span></p>
                            <div className="text-muted" >
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd >Officia quaerat eaque neque</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd >Possimus aut consequuntur incidunt</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd>Lorem ipsum dolor sit amet</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd>Consectetur adipisicing elit</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 strike fs-5"><IoCheckmark/></dt>
                                <dd className="text-decoration-line-through strike">Dolorum esse odio quas architecto sint</dd>
                            </dl>
                            </div>
                            <article className="d-flex justify-content-center ">
                            <button className="btn rounded-pill text-center my-4 px-4 buy"><a href="#home" className="text-white text-decoration-none">Buy Now</a></button>
                            </article>
                        </section>
                        <section className="bg-white p-3 col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="text-center fs-4 pt-4">Professional</h6>
                            <p className="text-center py-2 text-primary price ">$750 <span className=" yr">/ year</span></p>
                            <div className="text-muted" >
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd >Officia quaerat eaque neque</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd >Possimus aut consequuntur incidunt</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2"><FcCheckmark/></dt>
                                <dd>Lorem ipsum dolor sit amet</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd>Consectetur adipisicing elit</dd>
                            </dl>
                            <dl className="d-flex">
                                <dt className="px-2 "><FcCheckmark/></dt>
                                <dd>Dolorum esse odio quas architecto sint</dd>
                            </dl>
                            </div>
                            <article className="d-flex justify-content-center">
                            <button className="btn bg-secondary text-white rounded-pill text-center my-4 px-4">Buy Now</button>
                            </article>
                        </section>
       
                    </article>
                </section>
            </div>
        </main>
    );
}