import React from 'react'

import Footer from './component/Footer'
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home'
import Header from './component/Header'



const App = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16">
        <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
