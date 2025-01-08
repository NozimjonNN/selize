import { Routes, Route  } from "react-router-dom"

import Home from "./pages/home"
import Login from "./pages/login"
import Reg from "./pages/reg"

import './global.css'

export default function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
