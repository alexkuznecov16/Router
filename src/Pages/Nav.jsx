import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
        <Link className='nav-link active' aria-current='page' to='/About'>About</Link>
        <Link className='nav-link active' aria-current='page' to='/Contacts'>Contacts</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav