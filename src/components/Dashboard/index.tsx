import HeaderDashBoard from "../Header-dashboard";
import MainDashboard from "../MainDashboard";
import { DashboardUser } from "./styles";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";
import TechProvider from "../../contexts/TechContext";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading />;

  return user ? (
    <TechProvider>
      <DashboardUser>
        <HeaderDashBoard />
        <MainDashboard />
      </DashboardUser>
    </TechProvider>
  ) : (
    <Navigate to="/login" replace />
  );
};
export default Dashboard;
