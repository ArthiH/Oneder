
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Component/Home/home';
import { About } from './Component/About_us/about';
import { Protfolio } from './Component/Protfolio/protfolio';
import { Service } from './Component/Service/service';
import { Testimonial } from './Component/Testimonial/testimonial';
import { Blog } from './Component/Blog/blog';
import { Contact } from './Component/Contact/contact';

export function App() {
  return (
    <main >
      
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/protfolio' Component={Protfolio}/>
        <Route path='/service' Component={Service}/>
        <Route path='/testimonial' Component={Testimonial}/>
        <Route path='/blog' Component={Blog}/>
        <Route path='/contact' Component={Contact}/>
                               
      </Routes>
     
    </main>
  );
}


