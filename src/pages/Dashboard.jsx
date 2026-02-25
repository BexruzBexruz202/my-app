import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>
      <ProductForm refresh={fetchProducts} />
      <ProductList products={products} refresh={fetchProducts} />
    </div>
  );
}