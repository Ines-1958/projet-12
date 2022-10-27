import React from 'react'
import '../NavBar/NavBar.scss'
import pictoNage from '../../assets/pictoNage.png'
import pictoSport from '../../assets/pictoSport.png'
import pictoVelo from '../../assets/pictoVelo.png'
import pictoYoga from '../../assets/pictoYoga.png'

export default function NavBar() {
  return (
    <nav>
      <div className="navbar-navigation">
        <img src={pictoYoga} alt="" />
        <img src={pictoNage} alt="" />
        <img src={pictoVelo} alt="" />
        <img src={pictoSport} alt="" />
      </div>
      <p>Copiryght, SportSee 2020</p>
    </nav>
  )
}
