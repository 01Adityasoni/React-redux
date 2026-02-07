import {FcDeleteDatabase} from 'react-icons/fc';
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";


const CartItem = ({ item , itemIndex }) => {

const dispatch = useDispatch();

  const removeFromCart = () => {
     dispatch(remove(item.id))
     

  }
  return (
    <div className="bg-gray-50 rounded-lg shadow flex items-center p-4 gap-4 w-full">
      <div className="flex-shrink-0">
        <img src={item.image} alt={item.title} className="h-24 w-24 object-contain rounded" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h1>
        <h2 className="text-sm text-gray-600 mb-2">{item.description}</h2>
        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold">Price: ${item.price}</p>
          <button
            onClick={removeFromCart}
            className="ml-4 p-2 rounded-full bg-red-100 hover:bg-red-200 transition duration-200 group"
            title="Remove from cart"
          >
            <FcDeleteDatabase className="h-7 w-7 text-red-500 group-hover:text-red-700 group-hover:scale-110 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
