import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Импортируем хук
import { getProducts } from "../services/api";
import ProductList from "../components/ProductList";
import Users from "../components/Users";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const navigate = useNavigate(); // 2. Инициализируем навигацию

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Очистка данных сессии
    navigate("/login"); // 3. Переход на страницу логина
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
      <div style={{ width: "240px", backgroundColor: "#1e1e2f", color: "#fff", padding: "20px", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>Admin Panel</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, flexGrow: 1 }}>
          <li onClick={() => setActiveTab("products")} style={navItemStyle(activeTab === "products")}>Products</li>
          <li onClick={() => setActiveTab("users")} style={navItemStyle(activeTab === "users")}>Users</li>
          <li style={{ padding: "10px", color: "#666" }}>Settings</li>
        </ul>
        <button onClick={handleLogout} style={logoutButtonStyle}>
          Log Out
        </button>
      </div>

      <div style={{ flexGrow: 1, padding: "20px", color: "#fff", backgroundColor: "#2a2a3f", overflowY: "auto", height: "100vh" }}>
        <h1>{activeTab === "products" ? "Products" : "Users"}</h1>
        {activeTab === "products" ? <ProductList products={products} refresh={fetchProducts} /> : <Users />}
      </div>
    </div>
  );
}

const navItemStyle = (isActive) => ({
  padding: "10px",
  cursor: "pointer",
  borderRadius: "4px",
  backgroundColor: isActive ? "#3a3a55" : "transparent",
  marginBottom: "10px",
});

const logoutButtonStyle = {
  padding: "10px",
  backgroundColor: "#e74a3b",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
};
