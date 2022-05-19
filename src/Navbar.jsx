import React from 'react'
import Logo from './Logo'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Logo />
        </div>
        <h2>React Themes</h2>
      </div>
    </div>
  )
}

export default Navbar
