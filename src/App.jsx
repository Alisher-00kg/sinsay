import React, { useContext } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import Footer from "./components/Footer";
import { ProductsContext } from "./context/ProductsProvider";
import CartList from "./pages/cartList/CartList";
import { WishListItem } from "./components/wish-list/WishListItem";
const App = () => {
  const { bool, state } = useContext(ProductsContext);
  return (
    <div>
      <Header></Header>
      {bool === "MainPage" ? (
        <MainPage></MainPage>
      ) : bool === "CartList" ? (
        <CartList></CartList>
      ) : bool === "WishList" ? (
        <ul
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            flexWrap: "wrap",
            gap: "30px",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {state.favorArray.map((item) => {
            return <WishListItem key={item.id} {...item}></WishListItem>;
          })}
        </ul>
      ) : null}

      <Footer></Footer>
    </div>
  );
};

export default App;
