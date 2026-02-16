import { useAuth } from "../context/useAuth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isAuth, loading } = useAuth();

  if (loading) return null;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}
