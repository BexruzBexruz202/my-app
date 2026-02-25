import { useState } from "react";
import { addProduct } from "../services/api";

export default function ProductForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct({
      title,
      price: Number(price),
      description: "New product",
      image: "https://i.pravatar.cc",
      category: "electronics",
    });

    setTitle("");
    setPrice("");
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}