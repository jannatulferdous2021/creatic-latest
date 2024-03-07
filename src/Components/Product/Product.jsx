import React,{ useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, name, img, price } = props.product;

  return (
    <div className="m-3 mt-6 shadow-md rounded-xl">
      <Link to={`/shop/${id}`}>
        <div>
          <img className="rounded-t-lg" src={img} alt="" />
        </div>
        <div className="pl-5 pb-5 pt-3 font-sans">
          <h5 className="sm:text-[20px] text-[16px] text-[#2c3d2b] font-bold">
            {name}
          </h5>
          <p className="mb-2 font-semibold text-gray-800">Price:{price} </p>
          <button
            className="pl-5 pr-5 pt-2 pb-2 rounded text-white font-bold"
            style={{ backgroundColor: "#51CF48" }}
          >
            Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Product;
