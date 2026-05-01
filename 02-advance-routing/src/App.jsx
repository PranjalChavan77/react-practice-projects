import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import ContactDetails from './pages/ContactDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-white text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={ <Home /> }/>

        <Route path='/product' element={ <Product /> }>
         <Route path='men' element={ <Men /> }/>
         <Route path='women' element={ <Women />  }/>
         <Route path='kids' element={ <Kids /> }/>
        </Route>

        <Route path='/about' element={ <About /> }/>
        <Route path='/contact' element={ <Contact /> }/>
        <Route path='/contact/:contactId' element={<ContactDetails />} />

        <Route path='*' element={ <NotFound /> }/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
