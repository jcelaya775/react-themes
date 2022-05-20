import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import image from './images/image.png'
import Footer from './Footer'

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('theme', theme)
  }, [theme])

  const handleChange = (event) => {
    const value = event.value.split(/\s+/).join('').toLowerCase()
    setTheme(value)
  }

  return (
    <>
      <Navbar handleChange={handleChange} />
      <div className='hero'>
        <div className='container'>
          <h4>Here is some random text. Pretty cool!!</h4>
          <button className='btn'>Hover Me</button>
        </div>
      </div>
      <div className='main'>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            magni? Nisi reiciendis provident cumque sunt a quia, vero fugit
            officia! Dicta, sapiente magnam dolorum soluta officia officiis
            harum iure illum! Incidunt sequi vel, error voluptatum eum
            voluptatem. Facere, optio deleniti tempora explicabo nobis
            necessitatibus accusamus quae recusandae qui laudantium sequi?
          </p>
          <img src={image} className='img' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
