import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useState, useEffect } from "react";
import { updateProduct } from "../api/product";
import { getProduct } from "../api/product";

type Props = {};

const UpdateProduct = (props: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) =>
    state.products.products.find((item: any) => item.id === Number(id))
  );
  console.log(product);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = { id: id, name, price: Number(price) };
    try {
      await dispatch(updateProduct(update));
      navigate("/"); // Navigate to the home page upon successful update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h1>Update Product</h1>
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
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
