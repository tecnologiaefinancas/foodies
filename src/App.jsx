import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menubar from './components/Menubar/Menubar';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import ExploreFood from './pages/ExploreFood/ExploreFood';

const App = () => {
  return (
    <div>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/explore-food' element={<ExploreFood />} />
      </Routes>
    </div>
  )
}

export default App