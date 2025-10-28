import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Addtocard = ({ cart, menServices, addToCart, removeFromCart, totalItems, subtotal }) => {
  const navigate = useNavigate();
  const selectedItems = menServices.filter(item => cart[item.id] > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-gray-100 pt-20">
      <main className="max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <ShoppingCart className="w-7 h-7 text-sky-600" />
          <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm">Your Cart</h2>
        </div>

        {/* Empty Cart */}
        {selectedItems.length === 0 ? (
          <div className="text-center py-12 bg-white shadow-md rounded-2xl">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
            <Button
              className="mt-5 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full"
              onClick={() => navigate("/male")}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Products */}
            <div className="space-y-4">
              {selectedItems.map(item => (
                <Card
                  key={item.id}
                  className="p-4 rounded-2xl shadow-sm border bg-white/80 backdrop-blur"
                >
                  <CardContent className="flex justify-between items-center gap-4">
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">₹{item.price} • {item.unit}</p>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-100 rounded-full px-4 py-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 rounded-full bg-white hover:bg-gray-200"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>

                      <span className="font-semibold w-6 text-center text-gray-800">
                        {cart[item.id]}
                      </span>

                      <Button
                        size="sm"
                        className="h-8 w-8 rounded-full bg-sky-600 text-white hover:bg-sky-700"
                        onClick={() => addToCart(item.id)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-10 bg-white shadow-lg rounded-2xl p-6 border">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>

              <div className="flex justify-between text-gray-700 mb-3">
                <span>Total Items</span>
                <span className="font-semibold">{totalItems}</span>
              </div>

              <div className="flex justify-between text-gray-700 text-lg font-semibold mb-6">
                <span>Total Amount</span>
                <span className="text-sky-700">₹{subtotal}</span>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-sky-600 to-sky-700 text-white py-3 rounded-xl text-lg font-medium hover:opacity-90 transition"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Addtocard;
