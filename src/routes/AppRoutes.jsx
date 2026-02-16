import { Routes, Route } from "react-router-dom";
import Scroller from "../components/Scroller";
import Home from "../pages/Home";
import Shop from "../pages/Shop/Shop";
import ProductPage from "../pages/Shop/ProductDetail";
import Collections from "../pages/Shop/Collections";
import CollectionPage from "../pages/Shop/Collectionpage";
import Contact from "../pages/Contact";
import Wishlist from "../pages/User/Wishlist";
import Cart from "../pages/User/Cart";
import Profile from "../pages/User/Profile";
import Help from "../pages/Help";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProtectedRoute from "../routes/ProtectedRoute";
import AdminDashboard from "../pages/Admin/Dashboard";
import AdminRoute from "../routes/AdminRoute";
import NotFound from "../pages/404";
import AdminProducts from "../pages/Admin/Products";
import AdminUsers from "../pages/Admin/Users";
import AdminOrders from "../pages/Admin/Orders";
import AdminCollections from "../pages/Admin/AdminCollections";
import MyOrders from "../pages/User/MyOrders";
import ScrollHash from "../components/ScrollHash";
export default function AppRoutes() {
  return (
    <>
      <ScrollHash />
      <Scroller />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:slug" element={<CollectionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected User Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/user" element={<Profile />} />
        </Route>
        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/collections" element={<AdminCollections />} />
          <Route path="/admin/my-products" element={<AdminProducts />} />
          <Route path="/admin/my-orders" element={<AdminOrders />} />
          <Route path="/admin/my-users" element={<AdminUsers />} />
        </Route>

        {/* 404 - Catch All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
