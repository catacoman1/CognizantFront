import './App.css'
import { Route, Routes } from 'react-router-dom'
import Admin from './components/pages/Admin'
import Donate from './components/pages/Donate'
import Benefit from './components/pages/Benefit'

function App() {
  return(
    <Routes>
      <Route path = "/" element={<Admin/>} />
      <Route path = "/donate" element={<Donate/>} />
      <Route path = "/benefit" element={<Benefit/>} />
    </Routes>
  )
}

export default App
