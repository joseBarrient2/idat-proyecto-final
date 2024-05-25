import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Nosotros from './Nosotros';
import InfoProducto from './InfoProduct';
import '../css/home.css';
import { Routes, Route } from 'react-router-dom';
import Contactos from './Contactos';

function Paginaprincipal(){
    return(
       <>
          <section className='firstContainer'>
            <Header/>
            <Routes>            
               <Route path="/" element={<Content/>} />
               <Route path="/Nosotros" element={<Nosotros/>} />
               <Route path="/Contactos" element={<Contactos/>} />
               <Route path="/InfoProducto/:id" element={<InfoProducto/>} />
             </Routes>                      
          </section>
          <Footer/>
        </>
    );
}

export default Paginaprincipal;