import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../App";

const ProductDetail = () => {
  let { productID } = useParams();
  const { products, cart, handleAddToCart } = useContext(productContext);
  const [singlepd, setSinglepd] = useState({});

  useEffect(() => {
    // Find the product by ID from the products context or state
    const product = products.find((p) => p.id.toString() === productID);
    setSinglepd(product);
  }, [productID, products]);
  return (
    <div className="sm:pl-[100px] pl-[50px] pt-10 flex align-middle flex-wrap">
      <div>
        <img className="w-[400px] rounded-lg" src={singlepd.img} alt="" />
      </div>
      <div className="pt-10 sm:w-[50%] sm:pl-10">
        <h2 className="sm:text-4xl text-2xl font-bold">
          Product Name: {singlepd?.name}
        </h2>
        <h4 className="text-xl font-[600]"> Price : {singlepd?.price} Tk</h4>
        <p className="sm:pr-3  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          voluptatibus numquam dolores cum, beatae nesciunt perferendis libero
          aperiam voluptate inventore illo reiciendis assumenda magnam
          necessitatibus commodi, sequi sit fuga autem corrupti hic excepturi
          deserunt. Delectus expedita sint praesentium? Eligendi soluta maxime
          accusantium voluptas molestias assumenda iure maiores, illum similique
          nulla.
        </p>
        <button
          className=" mt-4 text-white pl-10 pt-2 pb-2 pr-10 rounded-md sm:text-xl"
          style={{ backgroundColor: "#51CF48"}}
          onClick={() => handleAddToCart(singlepd)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
