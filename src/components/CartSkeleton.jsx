function EmptyCart() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
      <p className="text-gray-600 mb-6">
        Looks like you haven’t added anything yet.
      </p>
      <a
        href="/collections"
        className="bg-pink-600 text-white px-6 py-3 rounded-xl"
      >
        Start Shopping
      </a>
    </div>
  );
}
export default EmptyCart;
