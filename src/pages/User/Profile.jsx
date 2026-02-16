import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../../context/useAuth";
import {
  FaUser,
  FaEnvelope,
  FaSignOutAlt,
  FaBoxOpen,
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Profile Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FaUser className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-lg font-medium">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>

          <span className="mt-2 text-xs px-3 py-1 rounded-full bg-gray-100 capitalize">
            {user?.role}
          </span>

          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
          >
            <FaSignOutAlt size={16} />
            Logout
          </button>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Account Details */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold mb-4">Account Details</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Phone no.</p>
                  <p className="font-medium">{user?.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-400" size={18} />
                <div>
                  <p className="text-xs text-gray-500">Address</p>
                  <p className="font-medium">{user?.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to="/my-orders"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition cursor-pointer"
            >
              <FaBoxOpen className="mb-3 text-primary" />
              <h4 className="font-medium">My Orders</h4>
              <p className="text-sm text-gray-500">
                Track & view your purchases
              </p>
            </Link>

            <Link
              to="/wishlist"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition cursor-pointer"
            >
              <FaHeart className="mb-3 text-primary" />
              <h4 className="font-medium">Wishlist</h4>
              <p className="text-sm text-gray-500">Products you saved</p>
            </Link>
            <Link
              to="/addresses"
              className="bg-white rounded-xl shadow p-5 hover:shadow-md transition cursor-pointer"
            >
              <FaMapMarkerAlt className="mb-3 text-primary" />
              <h4 className="font-medium">Addresses</h4>
              <p className="text-sm text-gray-500">Manage delivery locations</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
