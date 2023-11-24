/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router";
import "./product.css";


const Product = (props) => {
    const [productHaveSize, setProductHaveSize] = useState(false);
    const [productWithSize, setProductWithSize] = useState("m");
    const [quantity, setQuantity] = useState(1);
    const {title, description, price, category,  imageUrl} = props.selectedProduct;
    const [newPrice, setPrice] = useState(price);
  
    const navigate = useNavigate();
    const handleSize = (selectedSize) =>{
        setProductHaveSize(true);
        const item = {...props.selectedProduct};
        item.size= selectedSize;
        item.quantity=quantity; 
        item.price = newPrice;
        setProductWithSize(item);
    }
    const handleBuy = () =>{
        if (productHaveSize){
            props.addToCart(productWithSize);
            alert(`you added ${quantity} ${category} for the amount of ${newPrice}€ to your cart`)
            navigate("/store")
        }else{
            alert("YOU HAVEN'T SELECTED A SIZE")
        }
        
    }
    const handleIncrease = () =>{
        setQuantity(quantity +1);
        setPrice((previous)=>{
           return previous + price
        })
    }
    const handleDecrease = () =>{
        if(quantity > 1){
            setQuantity(quantity -1);
            setPrice((previous)=>{
                return previous - price
             })
        }
    }




    return( 
        <div className="product-container">
            <img className="product-img" src={imageUrl} alt={title+" image"}></img>
            <h2 className="product-description">{description}</h2>
            <div className="quantity-container">
            <h2 className="product-price">{price}€</h2>
            <div className="quantity-container-right">
                <button id="increaseQ" onClick={()=> handleDecrease() }>-</button>
                <h2 className="product-quantity">{quantity}</h2>
                <button id="decreaseQ" onClick={()=> handleIncrease() }>+</button>
                </div>
            </div>
            <div className="sizes">
                <button onClick={()=> handleSize("xs")} className="size-btn"><img className="size-img" src="/images/SizeXS.png"></img></button>
                <button onClick={()=> handleSize("s")} className="size-btn"><img className="size-img" src="/images/SizeS.png"></img></button>
                <button onClick={()=> handleSize("m")} className="size-btn"><img className="size-img" src="/images/SizeM.png"></img></button>
                <button onClick={()=> handleSize("l")} className="size-btn"><img className="size-img" src="/images/SizeL.png"></img></button>
                <button onClick={()=> handleSize("xl")} className="size-btn"><img className="size-img" src="/images/SizeXL.png"></img></button>
            </div>
            <button className="btn" onClick={()=> handleBuy() }>Add to cart</button>
        </div>
    )
}
export default Product;