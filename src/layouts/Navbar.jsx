import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";

import {
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaLayerGroup,
} from "react-icons/fa";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [hideAt, setHideAt] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuth, user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 50) {
        setShow(true);
        setHideAt(0);
        return;
      }

      if (show && hideAt === 0) {
        setShow(false);
        setHideAt(currentY);
        return;
      }

      if (!show && currentY - hideAt > 350) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show, hideAt]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Collections", path: "/collections" },
    { name: "My Orders", path: "/my-orders" },
  ];
  const adminLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "My Products", path: "/admin/my-products" },
    { name: "Orders", path: "/admin/my-orders" },
    { name: "Users", path: "/admin/my-users" },
  ];
  const links = isAuth && user.role === "admin" ? adminLinks : navLinks;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
      bg-white/90 backdrop-blur shadow-sm
      transition-transform duration-300
      ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 h-20">
        {/* LEFT (Desktop Logo) */}
        <div className="hidden md:flex flex-col items-start">
          <h1 className="text-[58px] font-dancing leading-none">PrigleMora</h1>
          <span className="text-[10px] uppercase tracking-[0.5em] ml-20 -mt-1 text-gray-500">
            Fashion
          </span>
        </div>

        {/* CENTER LOGO (Mobile) */}
        <div className="md:hidden text-center">
          <h1 className="text-3xl font-dancing leading-none">PrigleMora</h1>
          <span className="text-[8px] uppercase tracking-[0.4em] text-gray-500">
            Fashion
          </span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative pb-2 ${
                  isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                }`
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary scale-x-0 hover:scale-x-100 transition-transform origin-left" />
            </NavLink>
          ))}
        </ul>

        {/* RIGHT ICONS (Desktop) */}
        <div className="hidden md:flex gap-5 items-center text-gray-700">
          {isAuth ? (
            <>
              {user.role !== "admin" && (
                <>
                  <NavLink to="/wishlist">
                    <FaRegHeart size={18} />
                  </NavLink>

                  <NavLink to="/cart" className="relative">
                    <FaShoppingCart size={18} />
                    <span className="absolute -top-1 -right-2 bg-primary text-white text-[8px] rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </span>
                  </NavLink>
                </>
              )}
              {user.role === "admin" && (
                <NavLink to="/admin/collections" className="text-gray-700">
                  <FaLayerGroup size={18} />
                </NavLink>
              )}
              <NavLink to="/user">
                <FaRegUser size={18} />
              </NavLink>
            </>
          ) : (
            <div className="flex gap-4 text-sm font-medium">
              <NavLink
                to="/login"
                className="px-4 py-1 rounded hover:text-primary transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>

        {/* MOBILE ICONS + HAMBURGER */}
        <div className="md:hidden flex items-center gap-4">
          {isAuth ? (
            <>
              {user.role !== "admin" && (
                <>
                  <NavLink to="/wishlist" className="text-gray-700">
                    <FaRegHeart size={18} />
                  </NavLink>

                  <NavLink to="/cart" className="relative text-gray-700">
                    <FaShoppingCart size={18} />
                    <span className="absolute -top-1 -right-2 bg-primary text-white text-[8px] rounded-full h-4 w-4 flex items-center justify-center">
                      0
                    </span>
                  </NavLink>
                </>
              )}
              {user.role === "admin" && (
                <NavLink to="/admin/analytics" className="text-gray-700">
                  <FaCalculator size={18} />
                </NavLink>
              )}
              <NavLink to="/user" className="text-gray-700">
                <FaRegUser size={18} />
              </NavLink>
            </>
          ) : (
            <div className="flex gap-3 items-center justify-between">
              <NavLink to="/login" className="text-sm font-medium text-primary">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="text-sm font-medium text-primary"
              >
                Register
              </NavLink>
            </div>
          )}

          <button
            className="text-xl ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white
        transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 text-sm font-medium">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
}
