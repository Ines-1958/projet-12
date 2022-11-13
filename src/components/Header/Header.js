import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.scss'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="comp-header">
      <img src={logo} alt="" className="logo-header" />

      <NavLink>Accueil</NavLink>
      <NavLink>Profil</NavLink>
      <NavLink>Réglage</NavLink>
      <NavLink>Communauté</NavLink>
    </header>
  )
}
