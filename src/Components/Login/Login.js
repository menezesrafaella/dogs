import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import CreateUser from './CreateUser'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import { UserContext } from '../../UserContext'

const Login = () => {
  const {login} = useContext(UserContext)

  if(login === true) return <Navigate to="/conta" />

  return (
    <div>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="create" element={<CreateUser />} />
            <Route path="forget-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />

        </Routes>
    </div>
  )
}

export default Login