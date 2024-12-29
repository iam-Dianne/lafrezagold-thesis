import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/shared/auth.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const result = await response.json();

        if (result.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          navigate("/admin-login", { replace: true });
        }
      } catch (error) {
        console.log("Authentication failed: ", error);
        setIsAuthenticated(false);
        navigate("/admin-login", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  if (isAuthenticated === null) {
    <Spinner />;
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
