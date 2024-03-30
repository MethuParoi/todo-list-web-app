import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Protected = ({ component: Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
