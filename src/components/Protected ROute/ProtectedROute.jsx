import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the logged-in user from session storage
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    // Redirect to login page if no logged-in user is found
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate]);

  // Render the child components only if the user is logged in
  return <Outlet />;
};

export default ProtectedRoute;
