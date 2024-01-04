import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Nav from './web/GlobalComponents/Nav'
import Home from "./web/Pages/Home/Home"
import About from "./web/Pages/About/About"
import Work from "./web/Pages/Work/Work"
import Services from "./web/Pages/Services/Services"
import Contact from "./web/Pages/Contact/Contact"
export default function Layout() {
  return (
    <>
     <Nav/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/work' element={<Work/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     
    </>
  )
}
