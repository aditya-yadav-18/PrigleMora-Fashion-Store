import { NavLink } from "react-router-dom";
import IMG from "../../assets/jhumka.png";
const wishlistItems = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: "₹1,499",
    image: IMG,
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: "₹2,299",
    image: IMG,
  },
];

export default function Wishlist() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl font-dancing mb-10 text-center">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty 💔</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-primary font-semibold">{item.price}</p>

                <NavLink
                  to="/cart"
                  className="block text-center bg-primary text-white py-2 rounded-md text-sm hover:bg-primary/90 transition"
                >
                  Move to Cart
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
