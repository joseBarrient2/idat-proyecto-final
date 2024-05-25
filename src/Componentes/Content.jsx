import axios from 'axios'
import { useState, useEffect } from 'react';
import Productos from './producto';
import loadert from '../assets/loader.gif';
import '../css/producto.css'

function Content() {
  const [products, setProducts] = useState([]);
  const [filter, filterCategory] = useState(products);
  const [loader, setLoader] = useState(false);
  const [error, seterror] = useState(false);

  const readData = async () => {
    setLoader(true);
    try {
      //setTimeout(()=>{  },2000);
      const data = await axios.get('https://fakestoreapi.com/products');
      setProducts(data.data);
      filterCategory(data.data);
    } catch (error) {
      seterror(true);
      //console.log(error);
    } finally {
      console.log('acabo');
      //console.log(products);

      setLoader(false);
    }
  };

  useEffect(() => {

    readData();

  }, []);

  const filterProducts = (categoriap) => {
    //console.log(categoriap);
    const updatePtoducts = products.filter((catg) => catg.category === categoriap);
    filterCategory(updatePtoducts);
  }

  return (
    <>
      <section className="content-box">
        <section className="filtro">
          <button className='boton_categoria' onClick={() => filterCategory(products)}>All</button>
          <button className='boton_categoria' onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
          <button className='boton_categoria' onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
          <button className='boton_categoria' onClick={() => filterProducts("jewelery")}>Jewelery</button>
          <button className='boton_categoria' onClick={() => filterProducts("electronics")}>Electronics</button>
        </section>
            {loader && <img className='charge' src={loadert} alt='cargando' />}
            {error && <p className="error">Error inesperado, lo sentimos</p>}
        <section className="productos">
              
          {filter.map((product) => (

            <section className='card' key={product.id}>          
              <Productos
                  id ={product.id}
                title={product.title.substring(0, 12)}
                precio={product.price}
                categoria={product.category}
                imagen={product.image}
              />
            </section>
          ))}
        </section>
      </section>
    </>
  );
}

export default Content;