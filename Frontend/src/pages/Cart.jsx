import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: "LaCie Rugged 5TB Portable External HDD",
      price: 14432,
      qty: 1,
      capacity: "5TB",
      style: "Mini HDD",
      img: "https://images.unsplash.com/photo-1590244921278-d0413039aa2f?q=80&w=120",
    },
    {
      id: 2,
      name: "Toshiba Canvio Basics Portable HDD",
      price: 6931,
      qty: 1,
      capacity: "2TB",
      style: "Contemporary",
      img: "https://images.unsplash.com/photo-1531067746376-3c97658d7a0b?q=80&w=120",
    },
  ]);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-3 py-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* ITEMS */}
          <div className="flex-1 space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 flex gap-3"
              >
                {/* THUMBNAIL */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded bg-gray-100"
                />

                {/* DETAILS */}
                <div className="flex-1 flex flex-col">
                  <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
                    {item.name}
                  </p>

                  <div className="text-xs text-gray-500 mt-1">
                    {item.capacity} · {item.style}
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm font-semibold text-gray-900">
                      ₹{item.price.toLocaleString()}
                    </span>

                    {/* QTY */}
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="p-1.5 bg-gray-100 hover:bg-gray-200"
                      >
                        {item.qty === 1 ? (
                          <Trash2 size={14} />
                        ) : (
                          <Minus size={14} />
                        )}
                      </button>
                      <span className="px-2 text-xs font-medium">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="p-1.5 bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* SUBTOTAL (MOBILE) */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-right lg:hidden">
              <p className="text-sm">
                Subtotal ({items.length} items):{" "}
                <span className="font-semibold">
                  ₹{subtotal.toLocaleString()}
                </span>
              </p>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="lg:w-[300px]">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-6">
              <p className="text-sm mb-3">
                Subtotal ({items.length} items):{" "}
                <span className="font-semibold">
                  ₹{subtotal.toLocaleString()}
                </span>
              </p>

              <button
                onClick={() =>
                  navigate("/checkout", { state: { subtotal } })
                }
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md text-sm font-medium transition"
              >
                Proceed to Checkout
              </button>

              <p className="text-[11px] text-gray-500 mt-3">
                FREE delivery available at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
