import React, { useContext } from "react";
import { productContext } from "../../App";
import Product from "../../Components/Product/Product";

const Shop = () => {
  const {products,displayProducts, handleSearch} = useContext(productContext);

  return (
    <>
      <div>
        <div className="flex justify-between align-middle text-white pt-3 pb-3 sm:text-[22px] text-[18px] pl-5 pr-5" style={{backgroundColor: "black"}}>
          <div className="text-white">
            <h1>Total Products : {products.length}</h1>
          </div>
          <div>
            <input
             onChange={handleSearch}
             className="text-black rounded pl-6 pt-2 pb-2 sm:pr-40 pr-0 text-[18px]"
              type="text"
              placeholder="Search by Product Name"
            />
          </div>
        </div>
        <div className="flex justify-center flex-wrap ">
          {displayProducts.map((product) => (
              <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
