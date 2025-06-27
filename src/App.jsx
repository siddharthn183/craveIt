import React, {useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'; 
import Cart from './pages/Cart/Cart'; 
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

//npm run dev

const App = () => {
  const [showLogin, setsoLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setsoLogin={setsoLogin} /> : <></> }
    <div className='app'>
      <Navbar setsoLogin = {setsoLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}
export default App;