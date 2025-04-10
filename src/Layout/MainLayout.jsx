import React from "react";
import Footer from "../components/Footer";
import { Header } from "../components/UI/Header";
import { MainPage } from "../pages/MainPage";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { Login } from "../auth/Login";
import CartList from "../pages/cartList/CartList";
import { WishListPage } from "../pages/WishListPage";
import styled from "styled-components";

const MainLayout = () => {
  const { path, blurs } = useContext(ProductsContext);
  const showPath = () => {
    switch (path) {
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
    <>
      <Header />
      <ContainerOfAllContent>
        {showPath()}
        <Footer />
      </ContainerOfAllContent>
    </>
  );
};

export default MainLayout;
const ContainerOfAllContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 54px;
`;
