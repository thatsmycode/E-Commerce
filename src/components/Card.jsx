const Card = (props) => {
   // const {product} = props;
   const product = {
                        "title":"Planetaria Cap",
                        "description":"temporary description",
                        "price":5,
                        "category": "cap",
                        "id":1,
                        "imageUrl":"./public/cap_1.jpg"
                    }

    return (
        <>
            <article className="card-product">
                <img src={imageUrl} 
            </article>
        </>
    );
}

export default Card;