import React from "react";
import { useAppDispatch } from "../store/hook";
import { useState } from "react";
import { addProduct } from "../api/product";
import { useNavigate } from "react-router-dom";
type Props = {};

const AddProduct = (props: Props) => {
    const navigate =useNavigate()
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = { name, price: Number(price) };
    console.log(newProduct);
    try {
        await dispatch(addProduct(newProduct));
        navigate("/"); // Navigate to the home page upon successful update
      } catch (error) {
        console.error("Error updating product:", error);
      }
  };
  return (
    <div>
      {" "}
      <div>
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
