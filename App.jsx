import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Author from './components/Author'


import {Theme} from './context/Context'
import './App.css'
import { useState } from 'react'


const App = () => {
  return (
    <Theme>

      <Header/>
      <Author/>
      <Outlet />
    </Theme>
  )
}

export default App
