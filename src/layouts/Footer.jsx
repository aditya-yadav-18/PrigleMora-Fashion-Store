import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#e9c9c2] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="flex flex-col space-y-2 text-sm">
              <Link to="/help#faqs" className="hover:text-black cursor-pointer">
                FAQ
              </Link>
              <Link
                to="/help#shipping"
                className="hover:text-black cursor-pointer"
              >
                Shipping Info
              </Link>
              <Link
                to="/help#returns"
                className="hover:text-black cursor-pointer"
              >
                Returns
              </Link>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/4 top-0 h-full w-px bg-white/50" />

          {/* Quick Links */}
          <div className="md:pl-8">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2 text-sm">
              <Link to="/contact" className="hover:text-black cursor-pointer">
                About Us
              </Link>
              <Link
                to="/help#giftcards"
                className="hover:text-black cursor-pointer"
              >
                Gift Cards
              </Link>
              <Link
                to="/help#social"
                className="hover:text-black cursor-pointer"
              >
                Trends
              </Link>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-2/4 top-0 h-full w-px bg-white/50" />

          {/* Newsletter */}
          <div className="md:pl-8">
            <h3 className="font-semibold mb-4">
              Stay Connected & Give feedback
            </h3>
            <p className="text-sm mb-4">Share your experience with us.</p>
            <div className="flex w-full max-w-md rounded-full overflow-hidden border border-gray-300 focus-within:border-primary transition">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 py-3 text-sm outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-primary text-white px-4 text-sm font-medium hover:bg-primary/90 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-3/4 top-0 h-full w-px bg-white/50" />

          {/* Social */}
          <div className="md:pl-8">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-lg">
              <Link to="https://www.instagram.com/priglemorafashion/">
                <FaInstagram className="cursor-pointer hover:text-black" />
              </Link>
              <Link to="https://www.facebook.com/priglemorafashion/">
                <FaFacebookF className="cursor-pointer hover:text-black" />
              </Link>
              <Link to="https://www.pinterest.com/priglemorafashion/">
                <FaPinterestP className="cursor-pointer hover:text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex flex-row px-6 justify-between">
        <div className="border-t border-white/40 text-center py-4 text-sm">
          © 2026 PriggleMora Fashion. All Rights Reserved.
        </div>
        <div className="border-t border-white/40 text-center py-4 text-sm">
          Designed by{" "}
          <Link
            to="https://www.linkedin.com/in/aditya-yadav01"
            className="hover:text-black font-semibold"
          >
            Aditya Yaduvanshi
          </Link>
        </div>
      </div>
    </footer>
  );
}
