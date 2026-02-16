export default function CartSummary({ subtotal, shipping, total }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 sm:p-6 h-fit lg:sticky lg:top-24">
      <h2 className="text-lg sm:text-xl font-semibold mb-6">Order Summary</h2>

      <div className="space-y-4 text-gray-600 text-sm sm:text-base">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-base sm:text-lg text-gray-900">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-[#C97A74] hover:bg-pink-700 text-white py-3 sm:py-4 rounded-xl font-semibold shadow-lg transition">
        Proceed to Checkout
      </button>
    </div>
  );
}
