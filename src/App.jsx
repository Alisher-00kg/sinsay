import React, { useContext } from "react";
import MainLayout from "./Layout/MainLayout";
import { ProductsContext } from "./context/ProductsProvider";

const App = () => {
  const { blurs, inputVisible } = useContext(ProductsContext);
  return (
    <div>
      App<MainLayout onclick={() => blurs(!inputVisible)}></MainLayout>
    </div>
  );
};

export default App;
