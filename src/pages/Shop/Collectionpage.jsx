import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

export default function CollectionPage() {
  const { slug } = useParams();
  const { products, loading } = useProducts();

  const productList = products.allIds.map((id) => products.byId[id]);

  const filteredProducts = productList.filter(
    (product) => product.collection === slug,
  );

  const titleMap = {
    new: "New Arrivals",
    best: "Best Sellers",
    seasonal: "Seasonal Collection",
  };
  console.log("Slug:", slug);
  console.log("Products:", productList);
  console.log("Filtered:", filteredProducts);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-dancing text-center mb-12">
        {titleMap[slug] || "Collection"}
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products found in this collection.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
              />

              <h2 className="mt-4 text-lg font-medium">{product.name}</h2>

              <p className="mt-2 font-semibold">₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
