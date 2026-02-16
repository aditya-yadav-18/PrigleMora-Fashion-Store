import { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import ProductCard from "../../components/ProductCard";
import ProductSkeleton from "../../components/ProductSkeleton";
import OverlayLoader from "../../components/Loader/OverlayLoader";

const PAGE_SIZE = 15;

export default function Shop() {
  const { products, loading, hasMore, loadMore, search, loadProducts } =
    useProducts();

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  // 🔍 Handle search
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query || category) {
        search({ q: query, category });
      } else {
        loadProducts();
      }
    }, 400); // debounce

    return () => clearTimeout(delay);
  }, [query, category]);

  return (
    <section className="bg-[#FAF7F5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔍 Search */}
        <input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-1/2 mx-auto block mb-6 px-5 py-3 rounded-xl border"
        />

        {/* 🛍 Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.allIds.map((id) => (
            <ProductCard key={id} product={products.byId[id]} />
          ))}

          {loading &&
            Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
        </div>

        {/* ➕ See More */}
        {loading && <OverlayLoader />}

        {!loading && hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 rounded-full bg-[#C97A74] text-white hover:opacity-90"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
