import {useState} from "react";
import products from "../../products.json"
import Card from "./Card";
import './gallery.css'

const Gallery = () => {
  
    return(
        <div className="gallery-content">
        {
        products.map((each, index)=>{
            return (
            <Card key={index} product={each}/>   
            )
        })
        }
        </div>
    )
}
export default Gallery;