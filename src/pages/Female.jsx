import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Plus, Minus } from "lucide-react";
    import { useNavigate } from "react-router-dom";
    import { femaleServices } from "./Femaleservices"; // Add this import

    const Female = ({
        cart = {},
        addToCart = () => console.warn('addToCart function not provided'),
        removeFromCart = () => console.warn('removeFromCart function not provided'),
        totalItems = 0,
        subtotal = 0
      }) => {
        const navigate = useNavigate();

        // Add null check before mapping
        if (!femaleServices) {
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
          <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-gray-100 pt-20">
            <main className="max-w-7xl mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-pink-700 drop-shadow">
                        Women’s Laundry Services
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Fresh clothes, fresh feeling — choose items below and add to cart.
                    </p>
                </div>
                <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                    {femaleServices?.map(item => {
                        const qty = cart[item.id] || 0;
                        return (
                            <Card
                                key={item.id}
                                className="p-5 rounded-2xl shadow-sm border bg-white/80 backdrop-blur hover:shadow-lg hover:-translate-y-1 transition-all"
                            >
                                <CardHeader className="text-center">
                                    <div className="mx-auto p-4 rounded-xl bg-pink-100 shadow-inner">
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="text-gray-800 font-semibold">
                                        {item.name}
                                    </CardTitle>
                                    <p className="text-sm text-gray-600">
                                        ₹{item.price} • {item.unit}
                                    </p>
                                    <div className="flex items-center justify-center gap-4 mt-4 bg-gray-100 rounded-full px-4 py-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 w-8 rounded-full bg-white hover:bg-gray-200"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            <Minus className="w-4 h-4 text-gray-700" />
                                        </Button>
                                        <span className="font-semibold w-6 text-center text-gray-800">
                                            {qty}
                                        </span>
                                        <Button
                                            size="sm"
                                            className="h-8 w-8 rounded-full bg-pink-600 text-white hover:bg-pink-700"
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
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full"
                        onClick={() => navigate("/addtocard")}
                    >
                        Go to Cart ({totalItems} items) - ₹{subtotal}
                    </Button>
                </div>
            </main>
          </div>
        );
      };
      export default Female;