<<<<<<< HEAD
const Gallery = () => {

    return (

        
    )
}

=======
import {useState} from "react";
import products from "../../products.json"
import Card from "./Card";

const Gallery = () => {
  
    return(
        {
        products.map((each, index)=>{
            return (
            <Card key={index} product={each}/>   
            )
        })
        }
    )
}
>>>>>>> d5a2316045289fe1c905bc31807964227d011cb1
export default Gallery;