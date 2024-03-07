import React, { useContext, useState } from "react";
import { productContext } from "../App";

const Cart = () => {

  const {
    handleOrder,
    cart,
    handleRemove,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleUpdateQuantity,
  } = useContext(productContext);

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  // const shipping = total > 0 ? 15 : 0;
  // const tax = (total + shipping) * 0.10;
  const grandTotal = total;



  const handleChangeQuantity = (event, productId) => {
    const newQuantity = event.target.value;
    handleUpdateQuantity(productId, newQuantity);
  };

  return (
    <>
      <div className="pl-20 pt-7">
        <h1 className="sm:text-2xl text-[24px]">Shopping Cart</h1>
        {cart.map((ct) => (
          <div>
            <div
              className="flex rounded-md justify-start mt-5 mr-10 text-black "
              style={{ backgroundColor: "white" }}
            >
              <img className="rounded-[15px] h-[70px]" src={ct.img} alt="" />
              <div className="flex  justify-evenly mt-4">
                <h1 className="text-xl ml-5 mr-5">{ct.name}</h1>
                <h3 className="mt-1">{ct.price}Tk</h3>
              </div>
              <button onClick={() => handleRemove(ct.id)}>
                {" "}
                {/* Correctly attach handleRemove here */}
                <span
                  className="material-symbols-outlined rounded-full text-white font-bold ml-4 p-1"
                  style={{ backgroundColor: "red" }}
                >
                  close
                </span>
              </button>
            </div>
            <div className="flex align-middle mt-3">
              <button onClick={() => handleIncreaseQuantity(ct.id)}>
                <span
                  class="text-[#51CF48] material-symbols-outlined mt-2 mr-3"
                  style={{ backgroundColor: "white" }}
                >
                  add
                </span>
              </button>
              <input
                type="number"
                name=""
                id=""
                onChange={(event) => handleChangeQuantity(event, ct.id)}
                value={ct.quantity}
                className="w-[50px] rounded text-[black] text-center"
              />
              <button onClick={() => handleDecreaseQuantity(ct.id)}>
                <span
                  class="text-[#51CF48]  material-symbols-outlined mt-2 ms-3"
                  style={{ backgroundColor: "white" }}
                >
                  remove
                </span>
              </button>
            </div>
          </div>
        ))}
        <h3 className="mt-5 sm:text-xl text-[20px]">
          Total Amount : {grandTotal}Tk{" "}
        </h3>
        <button
          onClick={handleOrder}
          className="text-[#649660] font-bold pl-4 pr-4 pt-1 pb-1 rounded-md mt-3"
          style={{ backgroundColor: "white" }}
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default Cart;
