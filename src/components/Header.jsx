import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
          {/* <Link to="/">Home</Link> */}
    <Link to="/" className="home-title">Angelware</Link>
      {/* <h1 className='home-title'>Angelware</h1> */}

    </div>
  )
}

export default Header