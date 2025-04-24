import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomeLayout from './layouts/HomeLayout'
import Products from './pages/guest/product/Products'
import ProductDetail from './pages/guest/product/ProductDetail'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout/>}>
        <Route path='/products' element={<Products/>} />
        <Route path='/product' element={<ProductDetail/>} />
      </Route>
    </Routes>
  )
}

export default App
