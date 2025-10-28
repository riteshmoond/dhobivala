import React from "react";
import { menServices } from "./Menservices"; // Add this import
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Male = ({ 
  cart = {}, 
  addToCart = () => console.warn('addToCart function not provided'),
  removeFromCart = () => console.warn('removeFromCart function not provided'),
  totalItems = 0,
  subtotal = 0 
}) => {
  const navigate = useNavigate();

  // Add null check before mapping
  if (!menServices) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (id) => {
    if (typeof addToCart === 'function') {
      addToCart(id);
    }
  };

  const handleRemoveFromCart = (id) => {
    if (typeof removeFromCart === 'function') {
      removeFromCart(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 pt-20">
      <main className="max-w-7xl mx-auto px-4 py-10">
        
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-orange-700 drop-shadow">
            Men’s Laundry Services
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Fresh clothes, fresh feeling — choose items below and add to cart.
          </p>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {menServices?.map(item => {
            const qty = cart[item.id] || 0;
            return (
              <Card
                key={item.id}
                className="p-5 rounded-2xl shadow-sm border bg-white/80 backdrop-blur hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 rounded-xl bg-orange-100 shadow-inner">
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

                  <div className="mt-4 flex items-center justify-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-gray-200 hover:bg-gray-300 h-8 w-8"
                      onClick={() => handleRemoveFromCart(item.id)}
                      disabled={qty === 0}
                    >
                      <Minus className="w-4 h-4 text-gray-700" />
                    </Button>

                    <span className="font-semibold text-gray-800 w-6 text-center">
                      {qty}
                    </span>

                    <Button
                      size="icon"
                      className="rounded-full bg-orange-600 hover:bg-orange-700 text-white h-8 w-8"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </section>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-full px-10 py-4 text-lg font-medium hover:opacity-90 transition disabled:opacity-40"
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
