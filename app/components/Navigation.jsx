'use client'

import React, { useEffect } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'


export default function Navigation() {
useEffect(() => {
  require('bootstrap/dist/js/bootstrap.min.js')
})

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Mundo Magico</Link>
    <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">     
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Estilos De vida
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Salud</Link></li>
            <li><Link className="dropdown-item" href="#">Tarot</Link></li>
            <li><Link className="dropdown-item" href="#">Cistales Y Propiedades</Link></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tecnologia
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/tecnologia/computadora">Computadoras</Link></li>
            <li><Link className="dropdown-item" href="#">Ciberceguridad</Link></li>
            <li><Link className="dropdown-item" href="#">Auriculares</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Viajes
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Ciudades</Link></li>
            <li><Link className="dropdown-item" href="/viaje/playa">Playas</Link></li>
            <li><Link className="dropdown-item" href="#">Otros</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contactos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
