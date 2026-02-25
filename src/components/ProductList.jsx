import { deleteProduct } from "../services/api";

export default function ProductList({ products, refresh }) {
  const handleDelete = async (id) => {
    await deleteProduct(id);
    refresh();
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
          <h4>{product.title}</h4>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}