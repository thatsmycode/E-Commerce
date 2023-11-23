/* eslint-disable react/prop-types */
import {useState} from "react";
import products from "../../products.json"
import Card from "./Card";
import './gallery.css'

const Gallery = (props) => {
    const [filter, setFilter] = useState(products);

  const { selectedProduct, setSelectedProduct} = props;

const handleFilter = (category)=>{
    let filtered = products.filter((each)=>{
        return each.category === category
    })
    if(category === "All"){
        filtered = products;
    }
    setFilter(filtered);
}

    return(
        <>
       
       <div className="category-filter">
                    <button onClick={ ()=>  handleFilter("Cap")}><h1 className="cap">Cap</h1></button>
                    <button onClick={ ()=>  handleFilter("Mug")}><h1 className="mug">Mug</h1></button>
                    <button onClick={ ()=>  handleFilter("T-shirt")}><h1 className="t-shirt">T-shirt</h1></button>
                    <button onClick={ ()=>  handleFilter("Totebag")}><h1 className="totebag">Totebag</h1></button>
                    <button onClick={ ()=>  handleFilter("All")}><h1 className="all">All</h1></button>
                </div>
        <div className="gallery-content">
        {
        filter.map((each, index)=>{
            return (
                <>
                
                
            <Card key={index} product={each} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>   
            </>
            )
        })
        }
        </div>
        </>
    )
}
export default Gallery;