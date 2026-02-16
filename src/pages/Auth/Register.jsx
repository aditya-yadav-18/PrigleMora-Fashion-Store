import { useState } from "react";
import { Link } from "react-router-dom";
import OverlayLoader from "../../components/Loader/OverlayLoader";
import ButtonLoader from "../../components/Loader/ButtonLoader";
export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft px-4">
      {showOverlay && <OverlayLoader />}

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create your account to get started
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 px-4 py-3 rounded-lg
          text-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
          transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 px-4 py-3 rounded-lg
          text-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
          transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full border border-gray-200 px-4 py-3 rounded-lg
          text-sm placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
          transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg
          font-medium flex items-center justify-center
          hover:opacity-90 active:scale-[0.99]
          transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <ButtonLoader /> : "Register"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
