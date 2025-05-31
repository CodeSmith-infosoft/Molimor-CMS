import '@/assets/sass/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import ProductsPage from './pages/products'
import SingleProductPage from './pages/single-product'
import CategoriesPage from './pages/Categories'
import OrdersPage from './pages/orders'
import { ToastContainer } from 'react-bootstrap'
import RequireAuth from './routes/RequireAuth'
import RejectAuth from './routes/RejectAuth'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route element={<RequireAuth />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/product' element={<ProductsPage />} />
            <Route path='/add-product' element={<SingleProductPage />} />
            <Route path='/categories' element={<CategoriesPage />} />
            <Route path='/orders' element={<OrdersPage />} />
        </Route>
        <Route element={<RejectAuth />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-start"
        draggable
      />
    </>
  )
}

export default App
