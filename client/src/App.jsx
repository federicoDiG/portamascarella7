import React from 'react'
import Home from './components/Home'
import Rooms from './components/Rooms';
import Maps from './components/Maps'
import Info from './components/Info'
import Footer from './components/Footer'
import divider from "./images/bubble-side-divider.svg";

function App() {

  return (
    <>
      <Home />
      <Rooms />
      <Maps />
      <img src={divider} />
      <Info />
      <Footer />
    </>
  )
}

export default App
