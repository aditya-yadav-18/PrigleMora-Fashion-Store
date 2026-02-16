import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const product = products.byId[Number(id)];
  const isWishlisted = wishlist.some((p) => p.id === product?.id);

  if (loading) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  const similarProducts = products.allIds
    .map((pid) => products.byId[pid])
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="bg-[#FAF7F5] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        {/* ================= MAIN PRODUCT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* IMAGE */}
          <div className="w-full">
            <div className="w-full aspect-square bg-[#F3D6D3] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full h-full
                  object-contain md:object-cover
                "
              />
            </div>

            {product.stock <= 2 && (
              <span className="inline-block mt-4 bg-[#C97A74] text-white px-4 py-1 text-sm rounded-full">
                Only {product.stock} left
              </span>
            )}
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="text-3xl md:text-4xl font-bold text-[#2B2B2B]">
                  {product.name}
                </h1>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`text-2xl ${
                    isWishlisted ? "text-[#C97A74]" : "text-gray-400"
                  }`}
                >
                  ♥
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[#C97A74]">
                  {"★".repeat(Math.round(product.rating || 4))}
                  {"☆".repeat(5 - Math.round(product.rating || 4))}
                </span>
                <span className="text-sm text-gray-600">
                  ({product.reviewsCount || 0} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="text-3xl font-bold text-[#C97A74] mt-6">
                ₹{product.price}
              </p>

              {/* Description */}
              <p className="mt-6 text-[#2B2B2B] leading-relaxed max-w-xl">
                {product.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li>✔ Premium quality product</li>
                <li>✔ 7-day easy return</li>
                <li>✔ Secure payments</li>
              </ul>
            </div>

            {/* ACTIONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                className="w-full sm:w-auto flex-1 border border-[#C97A74]
                           text-[#C97A74] py-3 rounded-xl font-semibold
                           hover:bg-[#C97A74] hover:text-white transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => navigate(`/checkout?productId=${product.id}`)}
                className="w-full sm:w-auto flex-1 bg-[#C97A74] text-white
                           py-3 rounded-xl font-semibold
                           hover:opacity-90 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* ================= SIMILAR PRODUCTS ================= */}
        {similarProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {similarProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
