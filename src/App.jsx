import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import products from "../products.json";
import Product from "./components/Product";
import Gallery from './components/Gallery';
import { Routes, Route, Link ,Navigate} from "react-router-dom";


function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const cartCopy = [...cart];
    cartCopy.push(productToAdd);
    setSelectedProduct(cartCopy);
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/store"/>} />
            <Route path="/store" elemment={<Gallery selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />} />
            <Route path="/store/:id" element={<Product selectedProduct={selectedProduct} addToCart={addToCart} />} />
          </Routes>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App;
