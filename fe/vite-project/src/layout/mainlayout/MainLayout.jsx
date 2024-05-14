import React from 'react'
import MainNavbar from './MainNavbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
        <MainNavbar></MainNavbar>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout