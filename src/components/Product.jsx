import { useState } from "react";
import "./product.css";

const Product = (props) => {
    const [productHaveSize, setProductHaveSize] = useState(false);
    const [productWithSize, setProductWithSize] = useState();
    
    const {title, description, price, category, id, imageUrl} = props.selectedProduct;

    const handleSize = (selectedSize) =>{
        setProductHaveSize(true);
        const item = {...props.selectedProduct};
        item.size= selectedSize;
        setProductWithSize(item);
        
       console.log(item)
    }
    const handleBuy = () =>{
        if (productHaveSize){
            props.addToCart(productWithSize);
        }else{
            alert("YOU HAVEN'T SELECTED A SIZE")
        }
    }

    return(
        <div className="product-container">
            <img className="product-img" src={imageUrl} alt={title+" image"}></img>
            <h2 className="product-description">{description}</h2>
            <h2 className="product-price">{price}€</h2>
            <div className="sizes">
                <button onClick={()=> handleSize("xs")} className="size-btn"><img className="size-img" src="../../public/images/SizeXS.png"></img></button>
                <button onClick={()=> handleSize("s")} className="size-btn"><img className="size-img" src="../../public/images/SizeS.png"></img></button>
                <button onClick={()=> handleSize("m")} className="size-btn"><img className="size-img" src="../../public/images/SizeM.png"></img></button>
                <button onClick={()=> handleSize("l")} className="size-btn"><img className="size-img" src="../../public/images/SizeL.png"></img></button>
                <button onClick={()=> handleSize("xl")} className="size-btn"><img className="size-img" src="../../public/images/SizeXL.png"></img></button>
            </div>
            <button onClick={()=> handleBuy() }>Add to cart</button>
        </div>
    )
}
export default Product;