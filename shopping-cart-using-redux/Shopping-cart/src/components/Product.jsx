import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";


const Product = ({ product }) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product))

  }

  const removeFromCart = () => {
    dispatch(remove(product.id))

  }

  return(
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-4 w-full max-w-xs mx-auto min-h-[400px] transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="w-full text-center">
        <p className="text-lg font-semibold text-gray-800 mb-1">{product.title}</p>
      </div>
      <div className="w-full text-center">
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      </div>
      <div className="w-full flex justify-center">
        <img src={product.image} alt={product.title} className="h-40 w-40 object-contain mb-2" />
      </div>
      <div className="w-full text-center">
        <p className="text-base font-bold text-green-600 mb-2">${product.price}</p>
      </div>
      {
        cart.some((p) => p.id === product.id) ?
        (<button
          onClick={removeFromCart}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-200 w-full"
        >
          Remove from Cart
        </button>) :
        (<button
          onClick={addToCart}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200 w-full"
        >
          Add to Cart
        </button>) 
      }
    </div>
  )
};

export default Product;
