import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <FaHome /> },
    { path: "/products", label: "Products", icon: <FaBox /> },
    { path: "/categories", label: "Categories", icon: <FaBox /> },
    { path: "/shopkeepers", label: "Shopkeepers", icon: <FaUsers /> },
    { path: "/orders", label: "Orders", icon: <FaShoppingCart /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4 text-xl font-bold text-center">Admin</div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 ${
                isActive ? "bg-gray-700" : "hover:bg-gray-700"
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
