import React from "react";
import busket from "../../assets/category/busket.jpg";
import lamp from "../../assets/category/lamp.jpg";
import offer from "../../assets/category/offfer.webp";
import wall from "../../assets/category/wall_decor.webp";
import { Link } from "react-router-dom";

const Categrory = () => {
  const images = [
    {
      img: busket,
      name: "Busket",
      link: "shop/busket",
    },
    {
      img: lamp,
      name: "Lamp",
      link: "shop/lamp",
    },
    {
      img: offer,
      name: "Hot Deals",
      link: "shop/hot-deals",
    },
    {
      img: wall,
      name: "Wall-Decor",
      link: "shop/wall-decor",
    },
  ];
  return (
    <div  className=" container flex flex-row justify-center flex-wrap ">
      {images.map((item) => (
        <Link to={item.link}>
          <div className=" w-[250px] m-2 h-[300px] rounded ">
            <img
              className="rounded-tl-lg  rounded-tr-lg"
              src={item.img}
              alt=""
            />
            <h4
              className="rounded-br-lg  rounded-bl-lg text-center p-4 md:3xl sm "
              style={{ backgroundColor: "#51CF48" }}
            >
              {item.name}
            </h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categrory;
