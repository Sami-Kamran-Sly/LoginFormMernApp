import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
<header className='header'>
  <nav className='nav-link'>
  <Link to="/"> {/* Use 'to' instead of 'path' */}
          <h1>Logo</h1>
        </Link>
    <ul className='ul-link'>
        <li>
        <NavLink to="/register" >
    Register
  </NavLink>

        </li>

      <li><NavLink to="/Login">Login</NavLink></li>
    </ul>
  </nav>
</header>

  )
}

export default Navbar
