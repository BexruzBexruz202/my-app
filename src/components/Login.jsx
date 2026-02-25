import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      localStorage.setItem("token", "fake-token");
      onLogin();
    } else {
      alert("Неверный логин или пароль. Используй admin / 1234");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "auto", marginTop: 50 }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />
      <button type="submit" style={{ width: "100%", padding: 8 }}>Login</button>
      <p style={{ marginTop: 10, fontSize: 12 }}>Тестовый логин: admin / 1234</p>
    </form>
  );
}