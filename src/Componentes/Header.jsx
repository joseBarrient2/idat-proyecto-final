import { GiHamburgerMenu } from "react-icons/gi";
import { IoCart } from "react-icons/io5";
import banner from '../../src/assets/banner-venta-ropa.jpg';
import logohome from '../../src/assets/storeweb.jpg';
import '../css/header.css'
import SideBarMenu from './sideBarMenu';
import { useState } from "react";

function Header(){

   const [dato, setDato] = useState (false);
   const [item, setItem] = useState (window.localStorage.getItem('item'));

   const localStorage = value => {
      try {
         setText(value)
         window.localStorage.setItem('item',value);
      }catch(error){
         console.log(error);
      }
   }
   

    return(
          <> 
          <SideBarMenu  valor={dato}/>
          <section className="header-box">
             <header className="headermenu">              
                <article className="menu" onClick={() => setDato(!dato)}><GiHamburgerMenu /></article>
                <article className="logo"><img src={logohome} alt="" /></article>
                <article className="carrito">
                  <span className="icon-car"><IoCart/><span className="count">{item}</span></span>
                </article>
             </header>
          </section> 
          <section className="banner">
            <img src={banner} alt="" />
          </section>    
          </>
    );
}

export default Header;