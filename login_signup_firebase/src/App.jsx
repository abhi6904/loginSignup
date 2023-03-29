import Mynav from './components/Mynav'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Mynav />
    <Routes>
    <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/login" element={<LogIn />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
