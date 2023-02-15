import { Routes, Route, Navigate } from "react-router-dom"
import { Header } from "../components/Header"
import { HeaderMobile } from "../components/Header/HeaderMobile"

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HeaderMobile/>} /> 
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
