// import React from "react";
import { useAuth } from "../context/AuthContextProvider";

const Logout = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button
        className="bg-black text-white p-1 rounded hover:bg-green-600 transition-all 1s"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
