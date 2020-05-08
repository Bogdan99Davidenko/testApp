import React from "react";
import Registration from "./components/Registartion/Registration";
import Products from "./components/Products/Products";
import AddProduct from "./components/Products/AddProduct/AddProduct";
import EditProduct from "./components/Products/EditProduct/EditProduct";

function App() {
  return (
    <div className="App">
      <Registration />
      <Products />
      <AddProduct />
      <EditProduct />
    </div>
  );
}

export default App;
