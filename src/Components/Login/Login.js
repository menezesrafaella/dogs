import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import CreateUser from './CreateUser'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'

const Login = () => {
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