import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Register from './components/Register/Register'
import RegisterMain from './components/Register/RegisterMain'
import SessionRegister from './components/Register/SessionRegister'
import MainHome from './components/Home/MainHome'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<RegisterMain />}></Route>
          <Route path="/registerE" element={<Register />}></Route>
          <Route path="/registerS" element={<SessionRegister />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
