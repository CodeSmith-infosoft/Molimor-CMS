import "@/assets/sass/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProductsPage from "./pages/products";
import SingleProductPage from "./pages/single-product";
import CategoriesPage from "./pages/Categories";
import OrdersPage from "./pages/orders";
import { Slide, ToastContainer } from "react-toastify";
import RequireAuth from "./routes/RequireAuth";
import RejectAuth from "./routes/RejectAuth";
import Login from "./pages/Login";
import { MainProvider } from "./context/mainContext";
import SubCategoriesPage from "./pages/Categories/subCategory";
import OrderDetails from "./components/orders-components/OrderDetails";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";
import CouponDetails from "./pages/CouponDetails";
import AddCoupon from "./pages/AddCoupon";
import MarketplaceManager from "./pages/MarketplaceManager";
import SocialMedia from "./pages/SocialMedia";
import HomeBanner from "./pages/HomeBanner";

function App() {
  return (
    <>
      <MainProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/product" element={<ProductsPage />} />
              <Route path="/add-product" element={<SingleProductPage />} />
              <Route
                path="/update-product/:id"
                element={<SingleProductPage />}
              />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route
                path="/sub-categories/:id"
                element={<SubCategoriesPage />}
              />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/order/:id" element={<OrderDetails />} />
              <Route path="/users" element={<User />} />
              <Route path="/user/:id" element={<UserDetails />} />
              <Route path="/coupons" element={<CouponDetails />} />
              <Route path="/coupon" element={<AddCoupon />} />
              <Route path="/coupon/:id" element={<AddCoupon />} />
              <Route path="/market-place" element={<MarketplaceManager />} />
              <Route path="/social-media" element={<SocialMedia />} />
               <Route path="/home-banner" element={<HomeBanner />} />
            </Route>
            <Route element={<RejectAuth />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
          />
        </BrowserRouter>
      </MainProvider>
    </>
  );
}

export default App;
