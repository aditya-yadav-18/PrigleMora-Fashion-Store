import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const isWishlisted = wishlist.some((p) => p.id === product.id);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-[#F3D6D3] rounded-2xl shadow-md overflow-hidden
                 hover:shadow-xl hover:scale-[1.03] transition cursor-pointer"
    >
      {/* Image + badges */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-64 object-cover"
        />

        {product.stock <= 2 && (
          <span
            className="absolute top-3 left-3 bg-[#C97A74] text-white
                           text-xs px-3 py-1 rounded-full shadow"
          >
            Only {product.stock} left
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 text-xl
            ${isWishlisted ? "text-[#C97A74]" : "text-white"}
            drop-shadow hover:scale-110 transition`}
        >
          ♥
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>

        <p className="text-sm capitalize text-gray-600">{product.category}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#C97A74] text-sm">
            {"★".repeat(Math.round(product.rating))}
            {"☆".repeat(5 - Math.round(product.rating))}
          </span>
          <span className="text-xs text-gray-600">
            ({product.reviewsCount} reviews)
          </span>
        </div>

        {/* Price */}
        <p className="mt-3 text-xl font-bold text-[#C97A74]">
          ₹{product.price}
        </p>

        {/* Actions */}
        <div className="mt-4 flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex-1 border border-[#C97A74] text-[#C97A74]
                       px-4 py-2 rounded-lg text-sm
                       hover:bg-[#C97A74] hover:text-white transition"
          >
            Add to Cart
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="flex-1 bg-[#C97A74] text-white
                       px-4 py-2 rounded-lg text-sm
                       hover:opacity-90 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
