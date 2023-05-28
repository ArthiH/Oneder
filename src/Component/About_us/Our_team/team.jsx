import Person_1 from "../../../assets/team/image/person_1.jpg";
import { RiFacebookFill } from "@react-icons/all-files/ri/RiFacebookFill";
import { RiTwitterFill } from "@react-icons/all-files/ri/RiTwitterFill";
import { RiLinkedinFill } from "@react-icons/all-files/ri/RiLinkedinFill";
import { RiInstagramLine } from "@react-icons/all-files/ri/RiInstagramLine";

import"./_team.scss";

export const Team=()=>{
    return(
        <div>
            <main className="container team">
        <div className="txt">
            <h1 className="text-center my-4 text-primary">Our Team</h1>
            <p className="text-center fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima <br/>neque tempora reiciendis.</p>
        </div>
        <article className="row gap-2 py-2">
        <section className="image_part col">
            <article className="position-relative">
            <img className="img-fluid" src={Person_1} alt="Team member img not found" />
                <div className="position-absolute top-0 d-flex row justify-contnet-between icon w-25 h-100">
                <RiFacebookFill/>
                <RiTwitterFill/>
                <RiLinkedinFill/>
                <RiInstagramLine/>
                </div>

            </article>
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
            <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
            <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
            <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
        </article>
        <article className="row gap-2 py-3">
        <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
            <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
            <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
            <section className="image_part col">
                <img className="img-fluid position-relative" src={Person_1} alt="Team member img not found" />
                <p>Kaiara Spencer</p>
                <p>PRODUCT MANAGER</p>
            </section>
        </article>
        
    </main>
    <hr/>
        </div>
    );
}