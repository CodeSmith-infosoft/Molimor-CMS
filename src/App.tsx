import '@/assets/sass/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Layouts from './pages/layouts'
import ProductsPage from './pages/products'
import SingleProductPage from './pages/single-product'
import CategoriesPage from './pages/Categories'

function App() {
  return (
    <>
      <Layouts>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/product' element={<ProductsPage />} />
          <Route path='/single-product' element={<SingleProductPage />} />
          <Route path='/categories' element={<CategoriesPage />} />
        </Routes>
      </Layouts>
    </>
  )
}

export default App
