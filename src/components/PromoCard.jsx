import { NavLink } from "react-router-dom";

const cards = [
  {
    title: "New Arrivals",
    url: "/collections/new",
    subtitle: "Latest Trends",
    button: "Shop Now",
    image: "/PromoCardBg.png",
  },
  {
    title: "Best Sellers",
    url: "/collections/best",
    subtitle: "Popular Picks",
    button: "Shop Now",
    image: "/PromoCardBg.png",
  },
  {
    title: "Seasonal Sale",
    url: "/collections/seasonal",
    subtitle: "Up to 50% Off",
    button: "Shop Now",
    image: "/PromoCardBg.png",
  },
];

export default function PromoCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative h-[220px] rounded-lg overflow-hidden group"
            style={{
  backgroundImage: `url(${card.image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}}

          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/60 group-hover:bg-white/70 transition" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6">
              <h3 className="text-3xl font-dancing mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.subtitle}</p>
              <NavLink
                to={card.url}
                className="w-fit bg-primary text-white px-5 py-2 text-sm"
              >
                {card.button}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
