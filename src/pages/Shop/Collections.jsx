import { NavLink } from "react-router-dom";

const collections = [
  {
    title: "New Arrivals",
    image: "/src/assets/NewSale.png",
    link: "/collections/new",
  },
  {
    title: "Seasonal Sale",
    image: "/src/assets/SeasonalSale.png",
    link: "/collections/seasonal",
  },
  {
    title: "Best Sellers",
    image: "/src/assets/BestOffers.png",
    link: "/collections/best",
  },
];

export default function Collections() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-dancing text-center mb-4">
        Our Collections
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Curated styles designed for every season
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {collections.map((item) => (
          <NavLink
            key={item.title}
            to={item.link}
            className="group relative rounded-xl overflow-hidden shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <h2 className="text-white text-xl font-medium p-6">
                {item.title}
              </h2>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}
