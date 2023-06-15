import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import BtnUp from '../BtnUp/BtnUp.jsx'

export default function Layout() {
  return <>
    <Navbar/>
    <Outlet></Outlet>
    <BtnUp/>
  
  </>
}
