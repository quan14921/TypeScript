import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ProductPage from './pages/Product'
import About from './pages/About'
import Header from './components/Header'

function App() {
 
  return (

    
    <div className="container">
      <Header />
       
      <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product" element={<ProductPage />}/>
            <Route path="about" element={< About />}/>
          </Routes>
      </main>
    </div>
  )
}

export default App
