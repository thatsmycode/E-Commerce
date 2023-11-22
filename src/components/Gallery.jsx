import {useState} from "react";
import products from "../../products.json"
import Card from "./Card";

const Gallery = () => {
  
    return(
        <>
        {
        products.map((each, index)=>{
            return (
            <Card key={index} product={each}/>   
            )
        })
        }
        </>
    )
}
export default Gallery;