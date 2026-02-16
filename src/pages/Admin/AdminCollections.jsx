import { useState } from "react";
import { useProducts } from "../../context/ProductContext";

export default function AdminCollections() {
  const { products } = useProducts();

  const productList = products?.allIds?.map((id) => products.byId[id]) || [];

  const [collections, setCollections] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    selectedProducts: [],
  });

  const toggleProductSelection = (id) => {
    setForm((prev) => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(id)
        ? prev.selectedProducts.filter((p) => p !== id)
        : [...prev.selectedProducts, id],
    }));
  };

  const createCollection = () => {
    if (!form.name) return;

    const newCollection = {
      id: Date.now(),
      name: form.name,
      productIds: form.selectedProducts,
    };

    setCollections([newCollection, ...collections]);
    setForm({ name: "", selectedProducts: [] });
    setShowModal(false);
  };

  const deleteCollection = (id) => {
    setCollections((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#C97A74]">
          Collections Management
        </h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#C97A74] text-white px-5 py-2 rounded-xl"
        >
          + Add Collection
        </button>
      </div>

      {collections.length === 0 ? (
        <p className="text-gray-500">No collections created yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection) => {
            const collectionProducts = collection.productIds.map(
              (id) => products.byId[id],
            );

            return (
              <div
                key={collection.id}
                className="bg-white rounded-2xl shadow p-4 space-y-4"
              >
                <h3 className="text-lg font-semibold">{collection.name}</h3>

                <div className="grid grid-cols-3 gap-2">
                  {collectionProducts
                    .slice(0, 3)
                    .map(
                      (product) =>
                        product && (
                          <img
                            key={product.id}
                            src={product.image}
                            alt={product.name}
                            className="h-20 w-full object-cover rounded-lg"
                          />
                        ),
                    )}
                </div>

                <p className="text-sm text-gray-500">
                  {collection.productIds.length} Products
                </p>

                <button
                  onClick={() => deleteCollection(collection.id)}
                  className="w-full bg-red-500 text-white py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold">Create New Collection</h2>

            <input
              type="text"
              placeholder="Collection Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg p-2"
            />

            <div>
              <h3 className="font-medium mb-3">Select Products</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {productList.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => toggleProductSelection(product.id)}
                    className={`cursor-pointer border rounded-xl p-2 ${
                      form.selectedProducts.includes(product.id)
                        ? "border-[#C97A74] bg-pink-50"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-24 w-full object-cover rounded-lg"
                    />
                    <p className="text-sm mt-2 truncate">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={createCollection}
                className="flex-1 bg-[#C97A74] text-white py-2 rounded-lg"
              >
                Create
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
