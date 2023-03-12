import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import './App.css'
import Register from './components/Register/Register'
import RegisterMain from './components/Register/RegisterMain'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/registermain" element={<RegisterMain />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
