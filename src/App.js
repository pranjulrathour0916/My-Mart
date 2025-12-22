
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import Categories from './components/layouts/Categories';
import Home from './components/layouts/Home';
import Proddetail from './components/layouts/Proddetail';
import SelectProd from './components/layouts/SelectProd';
import Cart from '../src/components/layouts/resuable/Cart'
// import Snowfall from 'react-snowfall';


function App() {
  const hideNavbarRoutes = ['/login', '/signUp']
  const location = useLocation()
 

  const hideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <div className='bg-[#F8FAFC] min-h-screen font-semibold tracking-wider' >
      {/* <Snowfall/> */}
   <div>
    {!hideNavbar && <Navbar/>}
    <div className=''>
   {!hideNavbar && <Categories/>}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/prodetail/:category' element={<Proddetail/>}/>
      <Route path='/selectprod/:id' element={<SelectProd/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
</div>
   </div>
    </div>
  );
}

export default App;
