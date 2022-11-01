import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
            <h2>React</h2>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <ul className='navbar-nav'>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/Counter">
                  <li className='nav-item'>Counter</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/Countries">
                  <li className='nav-item'>Countries</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/form1">
                  <li className='nav-item'>form</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/formik1">
                  <li className='nav-item'>formik1</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/formik2">
                  <li className='nav-item'>formik2</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/props">
                  <li className='nav-item'>Props</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/lazyloading">
                  <li className='nav-item'>Lazyloading</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/Form2">
                  <li className='nav-item'>Form2</li>
                </Link>
                <Link style={{textDecoration: 'none'}} className='pe-2' to="/Notfound">
                  <li className='nav-item'>Notfound</li>
                </Link>
              </ul>
              </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
