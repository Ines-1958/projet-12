import React, { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import '../Home/Home.scss'
import '../../service/mock/userData.js'
import { getUser } from '../../service/mock/userData.js'
import Dashboard from '../Dashboard/Dashboard'

export default function Home(props) {
  const { id } = useParams()

  const [user, setUser] = useState([])

  useEffect(() => {
    getUser().then((t) => setUser(t))
  }, [])

  return (
    <div className="card-container">
      <Header />

      <div className="home-content">
        <NavBar />
        <div>
          <h1>Bienvenue chez SportSee</h1>
          <p className="title-welcome">
            Veuillez cliquer sur votre identifiant afin de vous connecter
          </p>
          <div className="user-card">
            {user &&
              user.map((user, index) => (
                // <NavLink
                //   key={index}
                //   className="user"
                //   to={`/dashboard/${user.id}`}
                // >
                <NavLink key={index} className="user" to={`/user/${user.id}`}>
                  Utilisateur {user.id}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
