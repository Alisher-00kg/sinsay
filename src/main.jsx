import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductsProvaider } from "./context/ProductsProvider.jsx";
import { ModalProvider } from "./context/ModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvaider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ProductsProvaider>
    </AuthProvider>
  </React.StrictMode>
);
