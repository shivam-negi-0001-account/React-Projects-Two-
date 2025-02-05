
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Profile from './pages/Profile'
import AllStudent from './pages/AllStudent'
import AddStudent from './pages/AddStudent'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/allstudent' element={<AllStudent></AllStudent>}></Route>
      <Route path='/addstudent' element={<AddStudent></AddStudent>}></Route>
      <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
    </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
