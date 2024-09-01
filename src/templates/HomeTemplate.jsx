import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const HomeTemplate = () => {
  return (
    <>
    <Header></Header>
    <main>
        <Outlet/>
    </main>
    <Footer></Footer>
    </>
  )
}

export default HomeTemplate