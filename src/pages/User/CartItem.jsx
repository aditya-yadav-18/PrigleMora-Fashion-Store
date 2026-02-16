export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full sm:w-28 h-48 sm:h-36 object-cover rounded-xl"
      />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-base sm:text-lg">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => updateQty(item.id, "dec")}
              className="px-3 py-2 text-lg"
            >
              −
            </button>

            <span className="px-4">{item.qty}</span>

            <button
              onClick={() => updateQty(item.id, "inc")}
              className="px-3 py-2 text-lg"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-sm text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="text-left sm:text-right font-semibold text-base sm:text-lg mt-2 sm:mt-0">
        ₹{item.price * item.qty}
      </div>
    </div>
  );
}
