import { useEffect, useState } from "react";
import { createAdminProduct } from "../../services/Admin/productManagement.js";

export default function AdminProductModal({ product, onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  // Pre-fill data when editing
  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
      });

      if (product.images?.length) {
        setPreview(product.images[0]);
      }
    }
  }, [product]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    // only ONE image
    if (image) {
      formData.append("images", image);
    }
    await createAdminProduct(formData);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">
            {product ? "Edit Product" : "Add New Product"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm text-gray-600">Product Name</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring focus:ring-[#C97A74]/30 outline-none"
          />
        </div>

        {/* Price + Stock */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-600">Price</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Stock</label>
            <input
              type="number"
              value={form.stock}
              onChange={(e) => setForm({ ...form, stock: e.target.value })}
              className="w-full mt-1 px-4 py-2 border rounded-lg"
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="mb-5">
          <label className="text-sm text-gray-600">Product Image</label>

          <div className="mt-2 flex items-center gap-4">
            <div className="w-24 h-24 rounded-lg border flex items-center justify-center overflow-hidden bg-gray-50">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-xs text-gray-400">No Image</span>
              )}
            </div>

            <label className="cursor-pointer text-sm text-[#C97A74] font-medium">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 rounded-lg bg-[#C97A74] text-white hover:opacity-90"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
