import '../css/sidebar.css';
import logo from '../../src/assets/logoSidebar.png';
import { Link } from 'react-router-dom';

function SideBarMenu({valor}){
    return(
      <>
        <section className={valor ? 'sidebarOpen' : 'sidebar'}>
            <section className="logoSidebar">
                <img className="logobar" src={logo} alt="" />
            </section>         
             <section className="boxlinks">
               <Link to='/Nosotros'>Nosotros</Link>
               <Link to='/'>Tienda</Link>
               <Link to='/Contactos'>Contactos</Link>
             </section>          
        </section>
      </>

)};

 export default SideBarMenu;