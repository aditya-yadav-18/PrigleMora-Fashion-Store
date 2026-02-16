import { useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./OrderSummary";
import EmptyCart from "../../components/CartSkeleton";
import IMG from "../../assets/jhumka box.png";
import IMG2 from "../../assets/earring.png";
export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Jhumka Box Blue",
      price: 1999,
      qty: 1,
      image: IMG,
      size: "M",
    },
    {
      id: 2,
      name: "Ear Rings Set",
      price: 1299,
      qty: 2,
      image: IMG2,
      size: "L",
    },
  ]);

  const updateQty = (id, type) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  const shipping = subtotal > 3000 ? 0 : 149;
  const total = subtotal + shipping;

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQty={updateQty}
                removeItem={removeItem}
              />
            ))}
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24 h-fit">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
