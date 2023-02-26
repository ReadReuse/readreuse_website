import React from 'react'
import { NavbarStyle } from './navbarStyles'

const Navbar = () => {
  return (
    <NavbarStyle>
        <div className='logo-section'>
                ReadReuse
            </div>        
            <div className='download-text'>
            Download our app
            </div>
    </NavbarStyle>
  )
}

export default Navbar