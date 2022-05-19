import React from 'react'
import Logo from './Logo'
import Selector from './Selector'

function Navbar({ handleChange }) {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <Logo />
          <h2 className='p-10'>React Themes</h2>
        </div>
        <div className='right'>
          <Selector handleChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
