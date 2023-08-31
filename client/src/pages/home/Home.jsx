import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import NewRoutes from '../../components/newRoutes/NewRoutes'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className='homeContainer'>
        {/* <NewRoutes/> */}
      </div>
    </div>
  )
}

export default Home