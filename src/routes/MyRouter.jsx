import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import MainLayout from '../layout/MainLayout'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route element={<MainLayout/>} path=''>
            <Route path='/' element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default MyRouter