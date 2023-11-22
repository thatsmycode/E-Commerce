
import "./product.css";

const Product = (props) => {
    const {title, description, price, category, id, imageUrl} = props.selectedProduct;
    return(
        <div className="product-container">
            <img className="product-img" src={imageUrl} alt={title+" image"}></img>
            <h2 className="product-description">{description}</h2>
            <h2 className="product-price">{price}€</h2>
            <div className="sizes">
                <button className="size-btn"><img className="size-img" src="../../public/images/SizeXS.png"></img></button>
                <button className="size-btn"><img className="size-img" src="../../public/images/SizeS.png"></img></button>
                <button className="size-btn"><img className="size-img" src="../../public/images/SizeM.png"></img></button>
                <button className="size-btn"><img className="size-img" src="../../public/images/SizeL.png"></img></button>
                <button className="size-btn"><img className="size-img" src="../../public/images/SizeXL.png"></img></button>
            </div>
            <button className="btn">Add to cart</button>
        </div>
    )
}
export default Product;