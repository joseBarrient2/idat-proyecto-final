import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GoStarFill } from "react-icons/go"; 
import loadert from '../assets/loader.gif';
import "../css/InfoProduct.css";


function InfoProduct(){
  const {id} = useParams();
  const [productItem, setProduct] = useState([]);
  const [error, seterror] = useState(false);
  const [loader, setLoader] = useState(false);
   
  const readProduct = async () => {
    setLoader(true);
    try {
      //setTimeout(()=>{  },2000);
      const info = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(info.data);  
      //console.log(info);
    } catch (error) {
      seterror(true);
      //console.log(error);
    } finally {
      console.log('acabo');
      setLoader(false);
    }
  };
  //const point = productItem.rating.rate;
  //console.log(productItem.rating[0]);

  useEffect(() => {

    readProduct();

  }, []);

    return(
    <>
    {loader && <img className='charge' src={loadert} alt='cargando' />}
       {error && <p className="error">Error inesperado, lo sentimos</p>}
    <section className="productBox">
                           
          <section className="productBox-img">
            <img src={productItem.image} alt="" width="320" />
          </section>
         
          <section className="productBox-details">
         
              <article className="box-details">
                <p><strong>Category:</strong> {productItem.category}</p>
                <h1 className="productTitle">{productItem.title}</h1>             
                <p className="produtPrice">S/ {productItem.price}</p>
                <p className="productDitails">{productItem.description}</p>
                <button className="buy">Agregar a carrito</button>
              </article>
          </section>
     </section>
     </>
    );
 }

 export default InfoProduct;