import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Product from "../pages/Product";
import Activate from "../pages/Activate";
import ResetPassword from "../pages/ResetPassword";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:id" element={<Profile />} />
      <Route path="/users/activate/:id" element={<Activate />} />
      <Route path="/ad/:id" element={<Product />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
