import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Pages/Layout";
import Busket from "./Pages/Busket";
import Lamp from "./Pages/Lamp";
import HotDeal from "./Pages/HotDeal";
import WallDecor from "./Pages/WallDecor";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import About from "./Pages/About";
import AOS from 'aos';
import 'aos/dist/aos.css';


export const productContext = createContext();

const App = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    fetch("FakeData/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  
  const handleUpdateQuantity = (productId, quantity) => {
    setCart((currentCart) => {
      return currentCart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: +quantity };
        }
        return item;
      });
    });
  };
  const handleRemove = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;

    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayProducts(matchedProducts);
  };

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const handleIncreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId && product.quantity > 1) {

        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const handleOrder = () => {
    setOrderPlaced(true);
    setCart([])
  };
  return (
    <productContext.Provider
      value={{
        handleOrder,
        handleUpdateQuantity,
        products,
        displayProducts,
        handleSearch,
        handleAddToCart,
        cart,
        handleRemove,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/shop/busket" element={<Busket />} />
          <Route path="/shop/lamp" element={<Lamp />} />
          <Route path="/shop/hot-deals" element={<HotDeal />} />
          <Route path="/shop/wall-decor" element={<WallDecor />} />
          <Route path="/shop/:productID" element={<ProductDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About/>}/>
          {/* <Route path="/cart" element={<Cart/>}/>  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </productContext.Provider>
  );
};

export default App;
