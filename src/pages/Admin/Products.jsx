import { useState } from "react";
import { useProducts } from "../../context/ProductContext";

export default function MyProducts() {
  const { products, loading } = useProducts();

  const [localProducts, setLocalProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  // Convert normalized products to array
  const contextProducts =
    products?.allIds?.map((id) => products.byId[id]) || [];

  // Combine context + locally added products
  const allProducts = [...localProducts, ...contextProducts];

  const handleAddProduct = () => {
    if (!form.name || !form.price) return;

    const newProduct = {
      id: Date.now(),
      name: form.name,
      price: Number(form.price),
      category: form.category,
      image: form.image,
    };

    setLocalProducts([newProduct, ...localProducts]);
    setShowModal(false);
    setForm({ name: "", price: "", category: "", image: "" });
  };

  const handleDelete = (id) => {
    setLocalProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#C97A74]">My Products</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#C97A74] text-white px-5 py-2 rounded-xl"
        >
          + Add Product
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : allProducts.length === 0 ? (
        <p className="text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow p-4 space-y-3"
            >
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                className="w-full h-52 object-cover rounded-xl"
              />

              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="font-bold mt-1">₹{product.price}</p>
              </div>

              {product.id && (
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="w-full bg-transparent text-black py-2 rounded-lg hover:bg-black hover:text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="w-full bg-red-500 text-white py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4">
            <h2 className="text-xl font-semibold">Add Product</h2>

            <input
              type="text"
              placeholder="Product Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              placeholder="Image URL"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <div className="flex gap-3">
              <button
                onClick={handleAddProduct}
                className="flex-1 bg-[#C97A74] text-white py-2 rounded-lg"
              >
                Add
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
