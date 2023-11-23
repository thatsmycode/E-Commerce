import './card.css';
import {Link} from "react-router-dom";


const Card = (props) => {
    const {setSelectedProduct} = props;
   const {product} = props;
   /*const product = {
                        "title":"Planetaria Cap",
                        "description":"temporary description",
                        "price":5,
                        "category": "cap",
                        "id":1,
                        "imageUrl":"./images/cap_1.jpg"
                    }*/
const handleViewProduct= () =>{
    setSelectedProduct(product);
    <Link to="/store/product-details"/>
}
    return (
        <>
            <article className="card-product">
                <img src={product.imageUrl} />
                <div>
                    <p className="card-bread-select">{product.title}</p>
                    <p className="card-price">{product.price + " €"}</p>
                    <button onClick={()=>handleViewProduct()} className="btn">View Product</button>
                </div>
            </article>
        </>
    );
}

export default Card;