import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductsProvaider } from "./context/ProductsProvider.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";
import { MenuProvider } from "./context/MenuContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MenuProvider>
        <ProductsProvaider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ProductsProvaider>
      </MenuProvider>
    </AuthProvider>
  </React.StrictMode>
);
