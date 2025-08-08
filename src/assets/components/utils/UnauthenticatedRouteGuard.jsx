import { Navigate } from "react-router-dom";

export default function UnauthenticatedRouteGuard({ children, currentUser }) {
  if (currentUser) {
    return <Navigate to="/home" replace />;
  }
  return children;
}