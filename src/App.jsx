import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme')
    document.documentElement.setAttribute('theme', storedTheme)
  }, [])

  const changeTheme = () => {
    const value = window.localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('theme', theme)
  }

  return (
    <>
      <Navbar />
      <div className='main'>
        <label htmlFor='cars'>Choose a Theme:</label>
        <select
          name='cars'
          id='cars'
          onChange={(event) => {
            event.preventDefault()
            console.log(event.target.value)
            setTheme(event.target.value)
          }}
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
          <option value='modern'>Modern</option>
          <option value='pastel'>Pastel</option>
        </select>
        <button onClick={changeTheme}>Set Theme</button>
      </div>

      {/* <Footer /> */}
    </>
  )
}

export default App
