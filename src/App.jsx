import { useState } from 'react'
import './App.css'


import products from "../products.json";
import Product from "./components/Product";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <>
      <div>
       
        <div className="content">
          <Product selectedProduct={selectedProduct}></Product>
        </div>
        
       
      </div>
    </>
  )
}

export default App;
