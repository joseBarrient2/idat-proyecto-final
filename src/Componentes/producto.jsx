import { NavLink } from 'react-router-dom';
import InfoProducto from './InfoProduct';
import { useState } from 'react';
import '../css/producto.css';

function Productos({id,title,precio,imagen}){

   const [item, setItem] = useState(0);

    return(
    <>
        <section className="producto-items">
                <NavLink to={`/InfoProducto/${id}`} className="box-img">
                   <img src={imagen} alt="" />
                </NavLink>                       
               <section className="datosProducts">
                  <h2 className="product-title">{title}</h2>
                  <p className="product-price">S/{precio}</p>    
                  <button className="btn_agregar" onClick={() => setItem(item + 1)}>Agregar a carrito</button>                
               </section>
        </section>
     </>
    );
 }

 export default Productos;