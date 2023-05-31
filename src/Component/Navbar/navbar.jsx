import "./_navbar.scss";


import React, { useState, useEffect } from 'react';



export const Navbar=()=>{
    const [isSticky, setIsSticky] = useState(false);
      
    const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
    return(
            <nav className= {isSticky ? 'navbar sticky' : 'navbar'}>
                <article className="container  ">
                    <section className="d-flex justify-content-between align-items-center my-3">
                        <h1 className="fs-3 pt-2 logo">ONEDER</h1>
                        <section className="navbar-expand ">
                            <ul className="navbar-nav d-flex gap-5 list ">
                                <li><a href="#home" >Home</a></li>
                                <li><a href="#about" >About</a></li>
                                <li><a href="#protfolio">Protfolio</a></li>
                                <li><a href="#service">Service</a></li>
                                <li><a href="#testimonial">Testimonial</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#contact">Contact</a></li>
                                
                            </ul>
                            
                        </section>
                    </section>
                </article>
           </nav>
    );
}