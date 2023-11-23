import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import products from "../products.json";
import Product from "./components/Product";
import Gallery from './components/Gallery';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const [cart, setCart] = useState([]);

  const addToCart =(productToAdd)=>{
    const cartCopy = [...cart];
    cartCopy.push(productToAdd);
    setSelectedProduct(cartCopy);
  }
  
  return (
    <>
      <div>
       <Navbar />
        <div className="content">
         <Product selectedProduct={selectedProduct} addToCart={addToCart}></Product>
        {/* <Gallery selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} /> */}
        
        </div>
        <Footer />
       
      </div>
    </>
  )
}

export default App;
