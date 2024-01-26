import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UnknownPages from './pages/UnknownPages'
import HotelIdPage from './pages/HotelIdPage'
import HeaderShared from './components/shared/HeaderShared'

function App() {


  return (
   <div>
    <HeaderShared />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/register' element={<RegisterPage />}  />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/hotel/:id' element={<HotelIdPage />} />
      <Route path='*' element={<UnknownPages />} />
    </Routes>
   </div>
  )
}

export default App
