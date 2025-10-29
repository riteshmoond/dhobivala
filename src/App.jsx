import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Male from './pages/Male'
import Header from './component/Header'
import Footer from './component/Footer'
import Addtocard from './component/Addtocard'
import { menServices } from './pages/Menservices'
import Female from './pages/Female'
import Kids from './pages/Kids'

const STORAGE_KEY = "dobhivala_cart_v1";

const App = () => {

  const [cart, setCart] = useState({});

  const totalItems = Object.values(cart).reduce((s, q) => s + q, 0);
  const subtotal = Object.entries(cart).reduce((s, [id, q]) => {
    const list = Array.isArray(menServices) ? menServices : [];
    const item = list.find((m) => String(m.id) === String(id));
    return s + (item ? item.price * q : 0);
  }, 0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCart(JSON.parse(raw));
    } catch (e) {
      console.warn("Failed to parse cart", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn("Failed to save cart", e);
    }
  }, [cart]);

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      if (prev[id] - 1 <= 0) delete next[id];
      else next[id] = prev[id] - 1;
      return next;
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header totalItems={totalItems} subtotal={subtotal} />

      <main className="flex-1 pt-16">
        <Routes>
          <Route path='/cart' element={
            <Addtocard
              cart={cart}
              menServices={menServices}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              totalItems={totalItems}
              subtotal={subtotal}
            />
          } />
          <Route path='/addtocard' element={
            <Addtocard
              cart={cart}
              menServices={menServices}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              totalItems={totalItems}
              subtotal={subtotal}
            />
          } />
          <Route path='/' element={<Home />} />
          <Route
            path='/male'
            element={
              <Male
                menServices={menServices}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalItems={totalItems}
                subtotal={subtotal}
              />
            }
          />
          <Route
            path='/female'
            element={
              <Female
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalItems={totalItems}
                subtotal={subtotal}
              />
            }
          />
          <Route
            path='/kids'
            element={
              <Kids
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalItems={totalItems}
                subtotal={subtotal}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;