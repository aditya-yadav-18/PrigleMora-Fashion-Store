import { NavLink } from "react-router-dom";
const categories = [
  {
    name: "Earrings",
    price: "₹ 120.00",
    image: "/src/assets/earring.png",
  },
  {
    name: "Jhumkas",
    price: "₹ 270.00",
    image: "/src/assets/jhumka.png",
  },
  {
    name: "Studs",
    price: "₹ 450.00",
    image: "/src/assets/studs.png",
  },
  {
    name: "Jhumki Sets",
    price: "₹ 299.99",
    image: "/src/assets/jhumka box.png",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="bg-soft py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <span className="flex-1 h-px bg-primary/30"></span>
          <h2 className="text-3xl font-dancing">Featured Categories</h2>
          <span className="flex-1 h-px bg-primary/30"></span>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm text-center"
            >
              {/* Image */}
              <div className="h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.price}</p>
                <NavLink
                  to="/shop"
                  className="bg-primary text-white px-5 py-2 text-sm"
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
