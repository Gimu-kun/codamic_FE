import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layouts/MainLayout'
import Home from '../pages/Home/Home'
import AuthLayout from '../components/layouts/AuthLayout'
import Login from '../pages/Auth/components/Login/Login'
import Signup from '../pages/Auth/components/Signin/Signup'

export default function PublicRoutes() {
  return (
    <Routes>
        <Route path='' element={<MainLayout/>}>
            <Route path='home' element={<Home/>}></Route>
        </Route>
        <Route path='auth' element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}></Route>
            <Route path='signup' element={<Signup/>}></Route>
        </Route>
    </Routes>
  )
}
