import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import MyRouter from './routes/MyRouter'
import MouseEffect from './components/mouse/MouseEffect'
function App() {
  return (
    <>
      <>
        <MouseEffect/>
        <MyRouter/>
      </>
    </>
  )
}

export default App
