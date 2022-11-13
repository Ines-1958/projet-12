import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Dashboard/Dashboard.scss'
import '../../classData/userData.js'
// import getUser, { UserData } from '../../classData/userData'
import { getUserById, UserData } from '../../classData/userData.js'
import Card from '../../components/Card/Card'
import RadarChartActivity from '../../components/RadarChartActivity/RadarChartActivity'
import RadialBarScore from '../../components/PieChartScore/PieChartScore'
import LineChartActivity from '../../components/LineChartActivity/LineChartActivity'
import BarChartActivity from '../../components/BarChartActivity/BarChartActivity'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

export default function Dashboard() {
  const { userId } = useParams()
  console.log(userId)

  const [dataUser, setDataUser] = useState('')

  useEffect(() => {
    console.log(userId)
    getUserById(userId).then((users) => {
      setDataUser(users)
    })
  })

  console.log(dataUser)

  return (
    <div className="dashboard-container">
      <Header />
      <NavBar />
      <div className="dashbord-content">
        <div className="dashboard-title">
          <p className="welcome">
            <span>Bonjour</span>
            <span className="user-firstName">{dataUser}</span>
          </p>
          <p className="text">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="components-container">
          <div className="recharts-components">
            <BarChartActivity />
            <LineChartActivity />
            <RadarChartActivity />
            <RadialBarScore />
          </div>
          <div className="card-component">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
