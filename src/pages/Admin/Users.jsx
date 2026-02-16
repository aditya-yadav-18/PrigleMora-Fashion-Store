import { useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Riya Sharma",
      email: "riya@gmail.com",
      role: "Customer",
      status: "Active",
      joined: "2026-02-10",
    },
    {
      id: 2,
      name: "Aman Verma",
      email: "aman@gmail.com",
      role: "Customer",
      status: "Blocked",
      joined: "2026-02-12",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Customer",
  });

  const addUser = () => {
    if (!form.name || !form.email) return;

    const newUser = {
      id: Date.now(),
      ...form,
      status: "Active",
      joined: new Date().toISOString().split("T")[0],
    };

    setUsers([newUser, ...users]);
    setForm({ name: "", email: "", role: "Customer" });
    setShowModal(false);
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user,
      ),
    );
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const activeUsers = users.filter((u) => u.status === "Active").length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#C97A74]">Users Management</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#C97A74] text-white px-5 py-2 rounded-xl"
        >
          + Add User
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SummaryCard title="Total Users" value={users.length} />
        <SummaryCard title="Active Users" value={activeUsers} />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">All Users</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Joined</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.joined}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-3 space-x-3">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      {user.status === "Active" ? "Block" : "Activate"}
                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <p className="text-center text-gray-500 py-8">No users available</p>
          )}
        </div>
      </div>

      {/* Add User Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Add New User</h2>

            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full border rounded-lg p-2"
            >
              <option>Customer</option>
              <option>Admin</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={addUser}
                className="flex-1 bg-[#C97A74] text-white py-2 rounded-lg"
              >
                Add
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
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
