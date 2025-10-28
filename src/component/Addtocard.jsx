import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Addtocard = ({ cart, menServices, addToCart, removeFromCart, totalItems, subtotal }) => {
  const navigate = useNavigate();
  
  const selectedItems = menServices.filter(item => cart[item.id] > 0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-50 via-white to-gray-100">
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <ShoppingCart className="w-6 h-6 text-sky-600" />
          <h2 className="text-2xl font-bold text-sky-800">Your Cart</h2>
        </div>

        {selectedItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">Your cart is empty</p>
            <Button 
              className="mt-4 bg-sky-600 text-white"
              onClick={() => navigate("/male")}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {selectedItems.map(item => (
              <Card key={item.id} className="mb-4 p-4">
                <CardContent className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">₹{item.price} • {item.unit}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Minus className="w-3 h-3" />
                    </Button>
                    <span className="font-medium">{cart[item.id]}</span>
                    <Button
                      size="sm"
                      className="bg-sky-600 text-white"
                      onClick={() => addToCart(item.id)}
                    >
                      <Plus className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="font-medium">Total Amount:</span>
                <span>₹{subtotal}</span>
              </div>
              <Button 
                className="w-full bg-sky-600 text-white"
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
