import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function PrivateRoute({ children }) {
  const fakeAuth = localStorage.getItem('cityguard_auth') === '1'
  return fakeAuth ? children : <Navigate to='/' />
}

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/dashboard' element={
          <PrivateRoute><Dashboard/></PrivateRoute>
        } />
        <Route path='/profile' element={
          <PrivateRoute><Profile/></PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}
