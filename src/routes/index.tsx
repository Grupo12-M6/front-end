import { Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home"
import Profile from "../pages/Profile"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/users/:id' element={<Profile/>} /> 
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
