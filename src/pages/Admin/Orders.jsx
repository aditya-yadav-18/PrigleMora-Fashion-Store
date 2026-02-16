import { useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "riya@gmail.com",
      items: 2,
      total: 2598,
      status: "Pending",
      date: "2026-02-15",
    },
    {
      id: 2,
      customer: "aman@gmail.com",
      items: 1,
      total: 1999,
      status: "Delivered",
      date: "2026-02-14",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order,
      ),
    );
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 space-y-8">
      <h1 className="text-3xl font-bold text-[#C97A74]">Orders Management</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <SummaryCard title="Total Orders" value={orders.length} />
        <SummaryCard title="Revenue" value={`₹${totalRevenue}`} />
        <SummaryCard
          title="Pending"
          value={orders.filter((o) => o.status === "Pending").length}
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">All Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">Customer</th>
                <th className="p-3">Items</th>
                <th className="p-3">Total</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.items}</td>
                  <td className="p-3 font-medium">₹{order.total}</td>
                  <td className="p-3">{order.date}</td>

                  <td className="p-3">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className={`px-2 py-1 rounded-lg text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      <option>Pending</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                      <option>Cancelled</option>
                    </select>
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No orders available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 border-l-4 border-[#C97A74]">
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
    </div>
  );
}
