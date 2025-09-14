import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/auth/signup'
import Login from './pages/auth/login'
import Home from './pages/home/home'
import City from './pages/city/city'
import Monuments from './pages/monuments/monuments'

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/city' element={<City />} />
        <Route path='/monuments' element={<Monuments />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
