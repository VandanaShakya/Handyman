import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Statichero from './components/Statichero.jsx'
import Contactus from './pages/Contactus.jsx'
import Myblog from './pages/Myblog.jsx'
import Reviews from './pages/Reviews.jsx'
import About from './pages/About.jsx'
import Recaptcha from './components/Recaptcha.jsx'
import Bathroom from './pages/services/Bathroom.jsx'
import Footer from './components/Footer.jsx'
import Oddjobs from './pages/services/Oddjobs.jsx'
import Decorating from './pages/services/Decorating.jsx'

import Tiling from './pages/services/Tiling.jsx'  
import Kitchen from './pages/services/Kitchen.jsx'
import Plumbing from './pages/services/Plumbing.jsx'
import Electrical from './pages/services/Electrical.jsx'
import Carpentry from './pages/services/Carpentry.jsx'
import Gardening from './pages/services/Gardening.jsx'
import Roofing from './pages/services/Roofing.jsx'
import Tvmount from './pages/services/Tvmount.jsx'
import Painting from './pages/services/Painting.jsx'
import Wallpaper from './pages/services/Wallpaper.jsx'  
import Joinery from './pages/services/Joinery.jsx'
import Fencing from './pages/services/Fencing.jsx'
import Flatpacking from './pages/services/Flatpacking.jsx'
import Flooring from './pages/services/Flooring.jsx'
import Plastering from './pages/services/Plastering.jsx'
import Repairs from './pages/services/Repairs.jsx'


const App = () => {
  return (
  <>
  <Statichero/>
     <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/my-blog' element={<Myblog />} />
    <Route path='/contact-us' element={<Contactus />} />
    <Route path='/reviews' element={<Reviews />} />
    <Route path='/about' element={<About />} />
    <Route path='/recaptcha' element={<Recaptcha/>} />


    {/* service components */}
      <Route path='/bathroom' element={<Bathroom/>} />
      <Route path='/odd-jobs' element={<Oddjobs/>} />
      <Route path='/decorating' element={<Decorating/>} />
      <Route path='/tiling' element={<Tiling/>} />
      <Route path='/kitchen' element={<Kitchen/>} />
      <Route path='/plumbing' element={<Plumbing/>} />
      <Route path='/electrical' element={<Electrical/>} />
      <Route path='/carpentry' element={<Carpentry/>} />
      <Route path='/gardening' element={<Gardening/>} />
      <Route path='/roofing' element={<Roofing/>} />
      <Route path='/painting' element={<Painting/>} />
      <Route path='/gardening' element={<Gardening/>} />
      <Route path='/gardening' element={<Gardening/>} />
      <Route path='/tv-mount' element={<Tvmount/>} />
      <Route path='/wall-paper' element={<Wallpaper />} />
      <Route path='/joinery' element={<Joinery />} />
      <Route path='/fencing' element={<Fencing />} />
      <Route path='/flat-packing' element={<Flatpacking />} />
      <Route path='/flooring' element={<Flooring />} />
      <Route path='/plastering' element={<Plastering />} />
      <Route path='/repairs' element={<Repairs />} />
   </Routes>

   <Footer />
  </>
  )
}

export default App