import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStatus from './UserStatus'

const User = () => {
  return (
    <section className='container'>
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/post" element={<UserPhotoPost />} />
            <Route path="/statistic" element={<UserStatus />} />
        </Routes>
    </section>
  )
}

export default User