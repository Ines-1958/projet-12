import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../Dashboard/Dashboard.scss'
import '../../classData/userData.js'
// import getUser, { UserData } from '../../classData/userData'
import { getUserById, UserData } from '../../classData/userData.js'
import Card from '../../components/Card/Card'
import RadarChartActivity from '../../components/RadarChartActivity/RadarChartActivity'

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
    <div>
      <div>
        <p className="welcome">
          <span>Bonjour</span>
          <span className="user-firstName">{dataUser}</span>
        </p>

        <p className="text">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <RadarChartActivity />
      <Card />
    </div>
  )
}
