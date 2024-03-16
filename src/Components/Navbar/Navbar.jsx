import React, { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Cart from "../../Pages/Cart/Cart";
import { productContext } from "../../App";

const Navbar = () => {
  const { cart } = useContext(productContext);

  const [nav, setNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const toggleCart = () => {
    if (nav) setNav(false);
    setShowCart(!showCart);
  };

  let totalQuantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    totalQuantity = totalQuantity + product.quantity;
  }

  console.log(totalQuantity);
  return (
    <div className=" pr-10 bg-[#51CF48] text-white flex  justify-between items-center h-24  mx-auto px-4  ">
      <h1 className="pl-10 text-3xl font-bold text-[black]">Creatic.</h1>
      <ul className="hidden md:flex pr-10 sm:mr-[-700px]">
        <li className="p-4 sm:text-xl xl">
          <NavLink to="/"> Home </NavLink>
        </li>
        <li className="p-4 sm:text-xl">
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li className="p-4 sm:text-xl xl">
          <NavLink to="/about"> About</NavLink>
        </li>
        <li className="p-4 sm:text-xl xl">
          <NavLink to="/contact"> Contact</NavLink>
        </li>
      </ul>
        <button onClick={toggleCart} className="md:ml-4 ml-[100px]  ">
          <NavLink>
            {" "}
            <sup className="mr-1 ">{totalQuantity}</sup>Cart
          </NavLink>
        </button>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "pl-4 fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 [#000300] ease-in-out duration-500 bg-[#51CF48] z-40 "
            : "ease-in-out duration-500 fixed left-[-100%] z-40"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[black]">Creatic.</h1>
        <li className="p-4 border-b border-white-600">
          <NavLink to="/"> Home</NavLink>
        </li>
        <li className="p-4 border-b border-white-600">
          <NavLink to="/shop"> Shop</NavLink>
        </li>
        <li className="p-4 border-b border-white-600">
          <NavLink to="/about"> About</NavLink>
        </li>
        <li className="p-4 border-b border-white-600">
          <NavLink to="/contact"> Contact</NavLink>
        </li>
      </ul>
      {showCart && (
        <div
          className="ml-3 lg:z-40 absolute sm:right-[40px] right-0 pb-10 top-[100px] sm:w-[30%]  w-[100%] rounded"
          style={{ backgroundColor: "#51CF48 " }}
        >
          <div className="flex justify-end">
            <button onClick={() => setShowCart(false)}>
              <AiOutlineClose
                size={20}
                className="text-white m-2 cursor-pointer"
              />
            </button>
          </div>
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
