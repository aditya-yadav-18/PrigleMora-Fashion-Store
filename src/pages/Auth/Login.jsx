import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import OverlayLoader from "../../components/Loader/OverlayLoader";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import Tips from "../../components/Tips.jsx";
export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    try {
      // Fake user creation (no API)
      const fakeUser = {
        user: {
          email: form.email,
          role: form.email === "admin@gmail.com" ? "admin" : "user",
        },
        token: "dummy-token",
      };

      // Save to localStorage
      localStorage.setItem("authUser", JSON.stringify(fakeUser.user));

      login(fakeUser.user);

      setShowOverlay(true);

      setTimeout(() => {
        if (fakeUser.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }, 3000);
    } catch (err) {
      setError("Something went wrong");
      setShowOverlay(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft px-4">
      {showOverlay && <OverlayLoader />}
      {showOverlay && <Tips />}

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">
            Please sign in to continue
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
          <div>
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
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 px-4 py-3 rounded-lg
            text-sm placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary
            transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg
          font-medium flex items-center justify-center
          hover:opacity-90 active:scale-[0.99]
          transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? <ButtonLoader /> : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
