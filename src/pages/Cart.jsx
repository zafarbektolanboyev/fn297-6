import React from "react";
import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(remove({ id }));
  }
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className="container mx-auto mt-[50px]">
        <h1 className="text-2xl font-bold text-center mb-6">Your Cart</h1>
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="card bg-white shadow-lg p-4 rounded-md border"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-700">Quantity: {item.count}</p>
                <button
                  className="btn w-full mt-4 p-[10px] bg-red-500 text-white rounded-md"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
