import {useState} from "react";
import products from "../../products.json"
import Card from "./Card";
import './gallery.css'

const Gallery = (props) => {
  const {setSelectedProduct} = props;
    return(
        <div className="gallery-content">
        {
        products.map((each, index)=>{
            return (
            <Card key={index} product={each} setSelectedProduct={setSelectedProduct}/>   
            )
        })
        }
        </div>
    )
}
export default Gallery;