import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react'; // Suggested icons

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: "Pro Wireless Headphones", price: 2999, qty: 1, color: "Midnight", img: "https://picsum.photos/200?random=1" },
    { id: 2, name: "Series 9 Smart Watch", price: 4999, qty: 2, color: "Starlight", img: "https://picsum.photos/200?random=2" },
  ]);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-black text-white p-2 rounded-xl">
            <ShoppingBag size={24} />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Bag</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Item List */}
          <div className="flex-1 space-y-8">
            {items.map((item) => (
              <div key={item.id} className="group flex flex-col sm:flex-row gap-6 pb-8 border-b border-gray-200">
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 w-full sm:w-40 h-40">
                  <img src={item.img} alt={item.name} className="object-cover w-full h-full group-hover:scale-110 transition duration-500" />
                </div>

                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <p className="text-xl font-medium">₹{item.price.toLocaleString()}</p>
                    </div>
                    <p className="text-gray-500 mt-1">{item.color}</p>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
                      <button className="p-2 hover:bg-gray-50 rounded-xl transition"><Minus size={16} /></button>
                      <span className="px-4 font-bold text-sm">{item.qty}</span>
                      <button className="p-2 hover:bg-gray-50 rounded-xl transition"><Plus size={16} /></button>
                    </div>
                    <button className="text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                      <Trash2 size={18} />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Modern Summary Card */}
          <div className="lg:w-[380px]">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-bold mb-6">Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Subtotal</span>
                  <span className="text-black">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-lg">FREE</span>
                </div>
                <div className="pt-4 mt-4 border-t border-dashed border-gray-200 flex justify-between items-end">
                  <span className="text-gray-500">Total</span>
                  <span className="text-3xl font-black tracking-tighter">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout', { state: { subtotal } })}
                className="w-full mt-8 bg-black text-white py-5 rounded-3xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-gray-200"
              >
                Checkout <ArrowRight size={20} />
              </button>
              
              <p className="text-center text-xs text-gray-400 mt-6 font-medium uppercase tracking-widest">
                Secure Encrypted Checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;