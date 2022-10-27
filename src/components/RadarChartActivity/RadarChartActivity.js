import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../classData/userData.js'
// import getUserActivity, { UserData } from '../../classData/userData'
import { getUserPerformance } from '../../classData/userData.js'
import { UserData } from '../../classData/userData.js'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

// const data = [
//   {
//     subject: 'Intensité',
//     A: 120,
//     B: 110,
//     fullMark: 150,
//   },
//   {
//     subject: 'Vitesse',
//     A: 98,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Force',
//     A: 86,
//     B: 130,
//     fullMark: 150,
//   },
//   {
//     subject: 'Endurance',
//     A: 99,
//     B: 100,
//     fullMark: 150,
//   },
//   {
//     subject: 'Energie',
//     A: 85,
//     B: 90,
//     fullMark: 150,
//   },
//   {
//     subject: 'Cardio',
//     A: 65,
//     B: 85,
//     fullMark: 150,
//   },
// ]
const test = 'http://localhost:3000/user/${userId}/activity'

export default function RadarChartActivity() {
  const { userId } = useParams()
  console.log(userId)

  const [activity, setActivity] = useState('')

  //   const userPerformance = async () => {
  //     const donnees = new UserData(userId)
  //     await donnees.getUserActivity()
  //   }
  //   console.log(userPerformance)

  useEffect(() => {
    getUserPerformance(userId).then((t) => setActivity(t))
    console.log(getUserPerformance)
    console.log(activity)
  }, [])

  //   useEffect(() => {
  //     console.log(userId)
  //     getUserPerformance(userId).then((users) => {
  //       setActivity(users)
  //     })
  //   })
  console.log(activity)

  return (
    // <div>RadarChartActivity</div>
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={activity}
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey="kind"
        // tickFormatter={(kindNumber) => {
        //   return typeof kindNumber === 'number'
        // }}
      />

      <PolarRadiusAxis axisLine={false} />
      <Radar
        // name="Mike"
        dataKey={activity}
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}
