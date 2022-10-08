import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../components/Register";
import DashboardPage from "../pages/Dashboard";
import LoginPages from "../pages/LoginPages";

const token = localStorage.getItem("@kenzie-hub:token");

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPages />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={token ? <DashboardPage /> : <Navigate to="/login" replace />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default RoutesMain;
