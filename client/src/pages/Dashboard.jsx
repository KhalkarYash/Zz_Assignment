import StatCard from "../components/dashboard/StatCard";
import RecentOrders from "../components/dashboard/RecentOrders";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import { mockOrders } from "../data/mockData";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,250",
      icon: <FaBox />,
      color: "bg-blue-500",
    },
    {
      title: "Total Orders",
      value: "5,430",
      icon: <FaShoppingCart />,
      color: "bg-green-500",
    },
    {
      title: "Total Shopkeepers",
      value: "320",
      icon: <FaUsers />,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      <RecentOrders orders={mockOrders} />
    </div>
  );
};

export default Dashboard;
