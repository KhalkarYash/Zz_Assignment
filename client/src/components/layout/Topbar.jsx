import React from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-gray-800">Admin Dashboard</div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaUserCircle className="text-2xl text-gray-600" />
            <span className="ml-2 text-gray-800">
              {user ? user.email : "Admin"}
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <FaSignOutAlt className="mr-1" /> Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
