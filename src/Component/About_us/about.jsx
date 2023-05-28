import { Route, Routes } from "react-router-dom";
import About_image from "../../assets/about/hero_1.jpg.webp";

import "./_about.scss";
import { Team } from "./Our_team/team";
import { FcCheckmark } from "@react-icons/all-files/fc/FcCheckmark";

export const About=()=>{
    return(
        <main>
            <div className="container about">
        <h1 className="text-center m-5 text-primary fw-bold">About Oneder</h1>
        <section className="d-flex content m-2">
                <div >
                <img className="img-fluid" src={ About_image} alt="About images not found" />
                </div>
            <article className="txt">
                <h4 className="fw-normal lh-1 py-2">For the next great business</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
                <div >
                    <ul className="navbar-nav">
                        <li><span><FcCheckmark/></span> Officia quaerat eaque neque</li>
                        <li><span><FcCheckmark/></span> Possimus aut consequuntur incidunt</li>
                        <li><span><FcCheckmark/></span> Lorem ipsum dolor sit amet</li>
                        <li><span><FcCheckmark/></span> Consectetur adipisicing elit</li>
                    </ul>
                </div>
                <button className="text-white">Get In Touch</button>
            </article>
        </section>
         </div>
       <Team/>
       <Routes>
       <Route path='/about' Component={About}/>
       </Routes>
        </main>
    );
}