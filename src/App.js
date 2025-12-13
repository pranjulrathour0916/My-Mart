
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import Categories from './components/layouts/Categories';
import Home from './components/layouts/Home';
import Proddetail from './components/layouts/Proddetail';


function App() {
  const hideNavbarRoutes = ['/login', '/signUp']
  const location = useLocation()

  const hideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <div className='bg-[#FFF8DE] min-h-screen font-serif tracking-wide' >
   <div>
    {!hideNavbar && <Navbar/>}
    <div className=''>
   {!hideNavbar && <Categories/>}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/prodetail' element={<Proddetail/>}/>
    </Routes>
</div>
   </div>
    </div>
  );
}

export default App;
