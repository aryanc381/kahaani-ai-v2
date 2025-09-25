import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/auth/signup'
import Login from './pages/auth/login'
import Home from './pages/home/home'
import City from './pages/city/city'
import Monuments from './pages/monuments/monuments'
import Gmap from './pages/gmap/gmap'
import Friends from './friends/friends'
import Profile from './pages/profile/profile'
import Ai from './pages/ai/ai'
import Showcase from './pages/showcase/showcase'

import useUserStore from './store/userStore'



function ProtectedRoutes() {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/city' element={<City />} />
      <Route path='/monuments' element={<Monuments />} />
      <Route path='/map' element={<Gmap />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/ai' element={<Ai />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/*' element={<ProtectedRoutes />} />
        <Route path='/' element={<Showcase />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
