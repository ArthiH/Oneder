import "./_service.scss";

import rocket from "../../assets/service/image/rocket.png";
import monitor from "../../assets/service/image/monitor.png";
import tool from "../../assets/service/image/tools.png";
import lightbulb from "../../assets/service/image/light-bulb.png";
import investment from "../../assets/service/image/investment.png";
import humanbrain from "../../assets/service/image/psychology.png";


export const Service=()=>{
    return(
        <main className=" service py-1 border-bottom border-2" id="service">
            <div className="container ">
                <h1 className="text-center text-primary">Our Services</h1>
                <section className="row">
                    <article className="col-lg-4 ">
                    <img src={rocket} alt="rocket not found" />
                        <h5>Business Consulting</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p className="text-primary">Learn More</p>
                    </article>
                    <article className="col-lg-4">
                    <img src={monitor} alt="monitor not found" />
                        <h5>Market Analysis</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p className="text-primary">Learn More</p>
                    </article>
                    <article className="col-lg-4">
                    <img src={tool} alt="tool not found" />
                        <h5>User Monitoring</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p className="text-primary">Learn More</p>
                    </article>
                    <article className="col-lg-4">
                    <img src={lightbulb} alt="lightbulb not found" />
                        <h5>Insurance Consulting</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p className="text-primary">Learn More</p>
                    </article>
                    <article className="col-lg-4">
                    <img src={investment} alt="investment not found" />
                        <h5>Financial Investment</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p className="text-primary">Learn More</p>
                    </article>
                    <article className="col-lg-4">
                        <img src={humanbrain} alt="humanbrain not found" />
                        <h5>Financial Management</h5>
                        <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                        <p className="text-primary">Learn More</p>
                    </article>
                </section>
            </div>
            
        </main>
    );
}