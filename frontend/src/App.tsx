import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
    <>
      <BrowserRouter>
        <RecoilRoot>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/city' element={<City />} />
          <Route path='/monuments' element={<Monuments />} />
          <Route path='/map' element={<Gmap />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/ai' element={<Ai />} />
          <Route path='/' element={<Showcase />} />
        </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
