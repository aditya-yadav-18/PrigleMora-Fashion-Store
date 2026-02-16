import { useState } from "react";
import {
  FaUsers,
  FaUserCheck,
  FaShoppingCart,
  FaChartLine,
  FaMobileAlt,
  FaDesktop,
  FaHeart,
} from "react-icons/fa";
export default function AdminDashboard() {
  const [stats, setStats] = useState({
    users: 120,
    products: 45,
    orders: 12,
    revenue: 35600,
  });
  const analytics = {
    totalUsers: 1240,
    activeUsers: 680,
    totalOrders: 432,
    conversionRate: "34%",
    wishlistAdds: 910,
    devices: {
      mobile: 72,
      desktop: 28,
    },
  };
  const [orders, setOrders] = useState([
    {
      id: 1,
      email: "user1@gmail.com",
      total: 1999,
      status: "Delivered",
    },
    {
      id: 2,
      email: "user2@gmail.com",
      total: 2499,
      status: "Pending",
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    email: "",
    total: "",
    status: "Pending",
  });

  // Add Order Manually
  const addOrder = () => {
    if (!newOrder.email || !newOrder.total) return;

    const order = {
      id: Date.now(),
      email: newOrder.email,
      total: Number(newOrder.total),
      status: newOrder.status,
    };

    setOrders([order, ...orders]);

    setStats((prev) => ({
      ...prev,
      orders: prev.orders + 1,
      revenue: prev.revenue + order.total,
    }));

    setNewOrder({ email: "", total: "", status: "Pending" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 space-y-10">
      <h1 className="text-3xl font-bold text-[#C97A74]">
        Welcome to the Dashboard
      </h1>
      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsCard
          icon={<FaUsers />}
          title="Total Users"
          value={analytics.totalUsers}
        />
        <AnalyticsCard
          icon={<FaUserCheck />}
          title="Active Users"
          value={analytics.activeUsers}
        />
        <AnalyticsCard
          icon={<FaShoppingCart />}
          title="Orders Placed"
          value={analytics.totalOrders}
        />
        <AnalyticsCard
          icon={<FaChartLine />}
          title="Conversion Rate"
          value={analytics.conversionRate}
        />
      </div>

      {/* Behaviour Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Device Usage */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-4">Device Usage</h3>

          <div className="space-y-4">
            <DeviceBar
              icon={<FaMobileAlt />}
              label="Mobile Users"
              value={analytics.devices.mobile}
            />
            <DeviceBar
              icon={<FaDesktop />}
              label="Desktop Users"
              value={analytics.devices.desktop}
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-4">User Actions</h3>

          <div className="flex items-center gap-4">
            <div className="p-4 rounded-lg bg-primary/10 text-primary">
              <FaHeart size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Wishlist Adds</p>
              <p className="text-xl font-semibold">{analytics.wishlistAdds}</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            High wishlist activity indicates strong purchase intent.
          </p>
        </div>
      </div>
      {/* Add Order Section */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">Add New Order</h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <input
            type="email"
            placeholder="User Email"
            value={newOrder.email}
            onChange={(e) =>
              setNewOrder({ ...newOrder, email: e.target.value })
            }
            className="border rounded-lg p-2"
          />

          <input
            type="number"
            placeholder="Total Amount"
            value={newOrder.total}
            onChange={(e) =>
              setNewOrder({ ...newOrder, total: e.target.value })
            }
            className="border rounded-lg p-2"
          />

          <select
            value={newOrder.status}
            onChange={(e) =>
              setNewOrder({ ...newOrder, status: e.target.value })
            }
            className="border rounded-lg p-2"
          >
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        <button
          onClick={addOrder}
          className="bg-[#C97A74] hover:bg-pink-700 text-white px-6 py-2 rounded-xl font-semibold transition"
        >
          Add Order
        </button>
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">User</th>
                <th className="p-3">Total</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="p-3">{order.email}</td>
                    <td className="p-3">₹{order.total}</td>
                    <td
                      className={`p-3 font-medium ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Shipped"
                            ? "text-blue-600"
                            : "text-yellow-600"
                      }`}
                    >
                      {order.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="p-6 text-center text-gray-500">
                    No recent orders
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 border-l-4 border-[#C97A74]">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
    </div>
  );
}
function AnalyticsCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-primary/10 text-primary text-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold">{value}</p>
      </div>
    </div>
  );
}

function DeviceBar({ icon, label, value }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2 text-sm">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-sm font-medium">{value}%</span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className="h-2 bg-primary rounded"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
