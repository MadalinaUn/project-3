import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import AllFoods from "../pages/AllFoods"
import FoodDetails from "../pages/FoodDetails"
import Checkout from "../pages/Checkout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Search from "../pages/Search"

import "../styles/routers.css"

const Routers = () => {
  return (
    <Routes className="Routes">
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}

export default Routers
