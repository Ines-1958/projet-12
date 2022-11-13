import React, { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import '../Home/Home.scss'
// import '../classData/userData.js'
import '../../classData/userData.js'
// import getUser, { UserData } from '../classData/userData'
// import getUser, { UserData } from '../../classData/userData.js'
import { getUser } from '../../classData/userData.js'
import Dashboard from '../Dashboard/Dashboard'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Home(props) {
  const { id } = useParams()
  // console.log(id)

  const [user, setUser] = useState([])
  console.log(user)

  useEffect(() => {
    // setDataUser(getUser())
    getUser().then((t) => setUser(t))
    console.log(getUser)

    console.log(user)
  }, [])
  console.log(user)

  return (
    <div className="card-container">
      <Header />
      <NavBar />

      <div className="home-content">
        <h1>Bienvenue chez SportSee</h1>
        <p className="title-welcome">
          Veuillez cliquer sur votre identifiant afin de vous connecter
        </p>
        <div className="user-card">
          {user &&
            user.map((user, index) => (
              <NavLink
                key={index}
                className="user"
                to={`/dashboard/${user.id}`}
              >
                Utilisateur {user.id}
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  )
}
