
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import Categories from './components/layouts/Categories';
import Home from './components/layouts/Home';


function App() {
  const hideNavbarRoutes = ['/login', '/signUp']
  const location = useLocation()

  const hideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <div className='bg-[#222222] min-h-screen font-mono' >
   <div>
    {!hideNavbar && <Navbar/>}
    <div className=''>
   {!hideNavbar && <Categories/>}

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
</div>
   </div>
    </div>
  );
}

export default App;
