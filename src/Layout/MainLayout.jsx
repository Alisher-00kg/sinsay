import React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/UI/Header";
import { MainPage } from "../pages/MainPage";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { Login } from "../auth/Login";
import CartList from "../pages/cartList/CartList";
import { WishListPage } from "../pages/WishListPage";

const MainLayout = () => {
  const { bool } = useContext(ProductsContext);
  const showPath = () => {
    switch (bool) {
      case "/":
        return <MainPage />;
      case "/cart":
        return <CartList />;
      case "/favorite":
        return <WishListPage />;
      default:
        return <Login />;
    }
  };
  return (
    <div>
      <Header />
      {showPath()}
      <Footer />
    </div>
  );
};

export default MainLayout;
