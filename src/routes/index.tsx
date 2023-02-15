import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
