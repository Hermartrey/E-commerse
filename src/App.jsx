import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Footer from './components/Footer/Footer'
import banner_mens from './components/Assets/banner_mens.png'
import banner_women from './components/Assets/banner_women.png'
import banner_kids from './components/Assets/banner_kids.png'
// import {Cart, LoginSignup, Shop, ShopCategory, Product} from './pages/index'
// import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={banner_women} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}></Route>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
