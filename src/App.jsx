import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // проверяем токен при загрузке
    const token = localStorage.getItem("token");
    if (token) setLoggedIn(true);
  }, []);

  return loggedIn ? (
    <Dashboard />
  ) : (
    <AuthPage onLogin={() => setLoggedIn(true)} />
  );
}

export default App;