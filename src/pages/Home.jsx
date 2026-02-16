import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import PromoCards from "../components/PromoCard";
import Categories from "../components/Categories";
import IMG from "../assets/jhumka.png";

export default function Home() {
  const images = ["img1", "img2", "img3", "img4"];
  return (
    <>
      <Hero />
      <PromoCards />
      <Categories />
      <section className="bg-[#faf3f1] py-14">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="flex items-center justify-center">
            <span className="flex-1 h-px bg-primary/30"></span>
            <h2 className="text-3xl font-dancing">Follow Us on Instagram</h2>
            <span className="flex-1 h-px bg-primary/30"></span>
          </div>
          <div className="flex justify-center text-center gap-6 mb-14">
            <p className="text-sm text-gray-500 mt-1">@PriggleMoraFashion</p>
          </div>
          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg group">
                <Link
                  to="https://www.instagram.com/priglemorafashion/#"
                  alt="Instagram Post"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={IMG}
                    alt="Instagram post"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 hover:opacity-60"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
