import './card.css';

const Card = (props) => {
   // const {product} = props;
   const product = {
                        "title":"Planetaria Cap",
                        "description":"temporary description",
                        "price":5,
                        "category": "cap",
                        "id":1,
                        "imageUrl":"./images/cap_1.jpg"
                    }

    return (
        <>
            <article className="card-product">
                <img src={product.imageUrl} />
                <div>
                    <p className="card-bread-select">{product.title}</p>
                    <p className="card-price">{product.price + " €"}</p>
                    <button className="btn">View Product</button>
                </div>
            </article>
        </>
    );
}

export default Card;