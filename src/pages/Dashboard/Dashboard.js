import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Dashboard/Dashboard.scss'
import '../../service/mock/userData.js'
// import { getUserById } from '../../service/mock/userData.js'
import { getUserById } from '../../service/API/fetchData'
import Card from '../../components/Card/Card'
import RadarChartActivity from '../../components/RadarChartActivity/RadarChartActivity'
import RadialBarScore from '../../components/PieChartScore/PieChartScore'
import LineChartActivity from '../../components/LineChartActivity/LineChartActivity'
import BarChartActivity from '../../components/BarChartActivity/BarChartActivity'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'

/**
 * renders the main content of the app (all user data)
 * @returns dashboard component
 */
export default function Dashboard() {
  const { userId } = useParams()

  const [dataUser, setDataUser] = useState('')

  useEffect(() => {
    // console.log(userId)
    getUserById(userId).then((users) => {
      setDataUser(users)
    })
  })

  // console.log(dataUser)

  return (
    <div className="dashboard-container">
      <Header />
      <div className="dashbord-content">
        <NavBar />
        <div className="dashboard">
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
            <div>
              <BarChartActivity />
              <div className="recharts-components">
                <LineChartActivity />
                <RadarChartActivity />
                <RadialBarScore />
              </div>
            </div>
            <div className="card-component">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
