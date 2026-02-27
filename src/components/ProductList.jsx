import { useEffect, useState } from "react";
import "./Product.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Products</h2>
      <div className="products-grid">
        {products.length === 0 && <p>No products found.</p>}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p className="price">${product.price}</p>
            <p className="category">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;