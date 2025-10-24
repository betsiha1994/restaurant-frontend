import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import RestaurantListing from "./components/RestaurantListing";
import MenuPage from "./components/MenuPage";
import CartPage from "./components/CartPage";
import CheckOutPage from "./components/CheckOutPage";
import OrderConfirmationPage from "./components/OrderConfirmationPage";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ProfilePage from "./components/ProfilePage";
import AdminPage from "./components/AdminPage";
import OrderReportPage from "./components/OrderReportPage";
import UserOrderReportPage from "./components/UserOrderReportPage";
import AdminManegement from "./components/AdminManegement";
import CategoryPage from "./components/CategoryPage";
import About from "./components/About";
import StoryPage from "./components/StoryPage";
import Footer from "./components/Footer";
import Catering from "./components/Catering";
// import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Categories />

              <RestaurantListing />
              <Footer />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<RestaurantListing />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/report" element={<UserOrderReportPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin/restaurants" element={<AdminPage />} />
        <Route path="/order-report" element={<OrderReportPage />} />
        <Route path="/admin-management" element={<AdminManegement />} />
        <Route path="/admin/categories" element={<CategoryPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/catering" element={<Catering />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
