import React from 'react'
import Header from './component/header/Header'
import Navbar from './component/navbar/Navbar'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Contact />
      <Footer />

    </>
  )
}
