import { NavLink } from "react-router-dom";
import heroImage from "../assets/HeroImage.png";

export default function Hero() {
  return (
    <section
      className="
        relative flex items-center
        min-h-[40vh] md:min-h-[100vh]
        bg-cover
        bg-[position:0%_top]
        md:bg-[position:center]
      "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/40" />

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-40 pb-12 md:pb-20">
        <div className="max-w-xl text-center md:text-left">
          <h2
            className="
              font-dancing leading-none mb-4 md:mb-6
              text-[38px]
              sm:text-[48px]
              md:text-[80px]
            "
          >
            Elevate Your Style
          </h2>

          <p className="mb-6 md:mb-8 text-gray-700 text-sm sm:text-base">
            Chic Accessories for Every Occasion
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
            <NavLink to="/shop" className="bg-primary text-white px-6 py-3">
              Shop Now
            </NavLink>
            <NavLink
              to="/collections"
              className="border border-primary text-primary px-6 py-3 hover:bg-primary hover:text-white transition"
            >
              View Collections
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
