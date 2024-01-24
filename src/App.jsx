import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import UnknownPages from './pages/UnknownPages'

function App() {


  return (
   <div>
    <h1>booking app</h1>
    <Routes>
      <Route path='/' element={HomePage} />
      <Route path='/register' element={RegisterPage} />
      <Route path='/login' element={LoginPage} />
      <Route path='*' element={<dispatchUnknownPages />} />
    </Routes>
   </div>
  )
}

export default App
