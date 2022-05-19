import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
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
          <h4>Here is some random text. Pretend it's awesome!!</h4>
          <button className='btn'>Hover Me</button>
        </div>
      </div>
      <div className='main'>
        <div className='something'>
          <p>hey</p>
          <p>hey</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
