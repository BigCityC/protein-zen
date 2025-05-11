import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import HomePage from './Homepage/Homepage'
import Navbar from './Navbar/Navbar'
import InputProtein from './InputProtein/InputProtein'

function App() {


  return (
    <>

      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <div className="container page-wrapper">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/InputProtein" element={<InputProtein />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
