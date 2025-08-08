import { Navigate } from "react-router-dom";

export default function AuthenticatedRouteGuard({ children, currentUser }) {
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}