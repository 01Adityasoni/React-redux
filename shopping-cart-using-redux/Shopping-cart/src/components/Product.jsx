








const Product = ({ product }) => {
  return(
    <div>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <p>${product.price} </p>
      </div>
      <div>
        <button>
          {
            false ? <p>Remove Item </p> : <p>Add to Cart</p>
          }
        </button>
      </div>
    </div>
  )
};

export default Product;
