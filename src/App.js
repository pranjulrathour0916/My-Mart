
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';

function App() {
  const hideNavbarRoutes = ['/login', '/signUp']
  const location = useLocation()

  const hideNavbar = hideNavbarRoutes.includes(location.pathname)
  return (
    <div className='bg-[#222222] min-h-screen font-mono' >
   <div>
    {!hideNavbar && <Navbar/>}
   
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>

   </div>
    </div>
  );
}

export default App;
