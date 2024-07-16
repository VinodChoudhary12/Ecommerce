import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/User/SignUp";
import LogIn from './Pages/User/LogIn'
import HomePage from "./Pages/User/HomePage";
import Orders from "./Pages/User/Orders";
import Cart from './Pages/User/Cart'
import EditProfile from "./Pages/User/EditProfile";
import AddProduct from "./Pages/Admin/AddProduct";
import Filter from "./components/UserComponents/Filter/Filter";

export default function App() {
  return (
    <>
      {/* This is Done */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/product" element={<Filter />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/edit-Profile" element={<EditProfile />} />
        <Route path="/add-Product" element={<AddProduct />} />
      </Routes>
    </>
  )
}