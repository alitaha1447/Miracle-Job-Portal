
// src/components/PrivateLayout.tsx
import { Navigate, Outlet } from "react-router";  // Import components (not types)
import { useAppSelector } from "./app/store";

const PrivateRoute: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);

  // console.log("Auth State:", { user });

  // Check both authentication flag and user object
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  // Render the child routes using Outlet (no need for typeof)
  return <Outlet />;
};

export default PrivateRoute;
