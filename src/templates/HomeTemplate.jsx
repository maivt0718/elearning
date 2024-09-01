import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const HomeTemplate = () => {
  return (
    <div className="">
    <Header></Header>
    <main className='h-screen'>
  
      <Outlet/>

        
    </main>
    <Footer></Footer>
    </div>
  )
}

export default HomeTemplate