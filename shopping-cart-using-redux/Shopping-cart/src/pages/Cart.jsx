import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc,curr) => acc + curr.price , 0));
  }, [cart])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {
        cart.length > 0 ? 
        (
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
              <div className="space-y-4">
                {
                  cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index}/>
                  ))
                }
              </div>
            </div>
            <div className="w-full md:w-80 bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">Summary</h3>
              <p className="mb-2 text-gray-600">
                <span className="font-medium">Total Items:</span> {cart.length}
              </p>
              <p className="mb-4 text-green-600 text-lg font-bold">
                Total Amount: ${totalAmount}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-200 w-full mt-2">Checkout Now</button>
            </div>
          </div>
        ) :
        (
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart is Empty</h2>
            <Link to={"/"}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition duration-200">Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart;
