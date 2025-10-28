import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Male = ({ menServices, cart, addToCart, removeFromCart, totalItems, subtotal }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-gray-100 pt-20">
      <main className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-sky-800 drop-shadow">
            Men’s Laundry Services
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Fresh clothes, fresh feeling — choose items below and add to cart.
          </p>
        </div>

        {/* Services Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {menServices.map(item => {
            const qty = cart[item.id] || 0;
            return (
              <Card key={item.id}
                className="p-5 rounded-2xl shadow-sm border bg-white/80 backdrop-blur hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-xl bg-sky-100 shadow-inner">
                    {item.icon}
                  </div>
                </CardHeader>

                <CardContent className="text-center space-y-2">
                  <CardTitle className="text-gray-800 font-semibold">
                    {item.name}
                  </CardTitle>

                  <p className="text-sm text-gray-600">
                    ₹{item.price} • {item.unit}
                  </p>

                  {/* Buttons */}
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-gray-200 hover:bg-gray-300 h-8 w-8"
                      onClick={() => removeFromCart(item.id)}
                      disabled={qty === 0}
                    >
                      <Minus className="w-4 h-4 text-gray-700" />
                    </Button>

                    <span className="font-semibold text-gray-800 w-6 text-center">
                      {qty}
                    </span>

                    <Button
                      size="icon"
                      className="rounded-full bg-sky-600 hover:bg-sky-700 text-white h-8 w-8"
                      onClick={() => addToCart(item.id)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* Checkout */}
        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-sky-600 to-sky-700 text-white rounded-full px-10 py-4 text-lg font-medium hover:opacity-90 transition disabled:opacity-40"
            disabled={totalItems === 0}
            onClick={() => navigate("/cart")}
          >
            View Cart ({totalItems}) • ₹{subtotal}
          </Button>
        </div>

      </main>
    </div>
  );
};

export default Male;
