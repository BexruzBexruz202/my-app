import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Dashboard from "../pages/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/Dashboard/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;