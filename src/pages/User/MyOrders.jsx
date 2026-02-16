const fakeOrders = [
  {
    id: "ORD-1001",
    date: "2026-01-10",
    status: "Delivered",
    total: "$129.99",
    items: [
      { name: "Wireless Headphones", qty: 1 },
      { name: "USB-C Cable", qty: 2 },
    ],
  },
  {
    id: "ORD-1002",
    date: "2026-01-14",
    status: "Processing",
    total: "$59.00",
    items: [{ name: "Mechanical Keyboard", qty: 1 }],
  },
  {
    id: "ORD-1003",
    date: "2026-01-16",
    status: "Cancelled",
    total: "$89.50",
    items: [{ name: "Gaming Mouse", qty: 1 }],
  },
];

const statusStyles = {
  Delivered: "bg-green-50 text-green-600",
  Processing: "bg-yellow-50 text-yellow-600",
  Cancelled: "bg-red-50 text-red-600",
};

export default function MyOrders() {
  return (
    <div className="min-h-screen bg-soft px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">My Orders</h1>
          <p className="text-sm text-gray-500 mt-1">
            View your recent orders and their status
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {fakeOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Order ID</p>
                  <p className="font-medium text-gray-900">{order.id}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>

              {/* Items */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Items</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>× {item.qty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-semibold text-gray-900">{order.total}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (optional reference) */}
        {fakeOrders.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
            <p className="text-gray-500">You have no orders yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
