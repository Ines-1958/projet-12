import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../RadarChartActivity/RadarChartActivity.scss'
import '../../service/mock/userData.js'
import { getUserPerformance } from '../../service/API/fetchData'
// import { getUserPerformance } from '../../service/mock/userData.js'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
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
// const test = 'http://localhost:3000/user/${userId}/activity'

export default function RadarChartActivity() {
  const { userId } = useParams()
  // console.log(userId)

  const [activity, setActivity] = useState([])

  //   const userPerformance = async () => {
  //     const donnees = new UserData(userId)
  //     await donnees.getUserActivity()
  //   }
  //   console.log(userPerformance)

  useEffect(() => {
    getUserPerformance(userId).then((t) => setActivity(t))
    // console.log(getUserPerformance)
    // console.log(activity)
  }, [])

  // console.log(activity)

  const test = Object.entries(activity)
  // console.log(test)

  const formattedKind = activity.map((data) => {
    switch (data.kind) {
      case 1:
        return { ...data, kind: 'Intensité' }
      case 2:
        return { ...data, kind: 'Vitesse' }
      case 3:
        return { ...data, kind: 'Force' }
      case 4:
        return { ...data, kind: 'Endurance' }
      case 5:
        return { ...data, kind: 'Energie' }
      case 6:
        return { ...data, kind: 'Cardio' }
      default:
        return { ...data }
    }
  })
  // console.log(formattedKind)

  return (
    <div className="radar-chart-container chart-content">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          // cx={300}
          // cy={250}
          // outerRadius={150}

          cx="50%"
          cy="50%"
          outerRadius="65%"
          // width={258}
          // height={300}
          data={formattedKind}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            tick={{ fontSize: 11 }}
            tickLine={false}
          />
          {/* <PolarRadiusAxis /> */}

          <Radar
            dataKey="value"
            // stroke="#8884d8"
            fill="rgba(255, 1, 1, 0.7)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
