// import { createContext, useContext, useEffect, useState } from "react";
// import { menServices } from "../pages/Menservices";

// const STORAGE_KEY = "dobhivala_cart_v1";
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});

//   const totalItems = Object.values(cart).reduce((s, q) => s + q, 0);
//   const subtotal = Object.entries(cart).reduce((s, [id, q]) => {
//     const item = menServices.find((m) => m.id === Number(id));
//     return s + (item ? item.price * q : 0);
//   }, 0);

//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) setCart(JSON.parse(saved));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (id) =>
//     setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

//   const removeFromCart = (id) => {
//     setCart((prev) => {
//       if (!prev[id]) return prev;
//       const next = { ...prev };
//       if (prev[id] - 1 <= 0) delete next[id];
//       else next[id] = prev[id] - 1;
//       return next;
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, totalItems, subtotal }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
