import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUserAverageSessions } from '../../classData/userData.js'
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

export default function LineChartActivity() {
  const { userId } = useParams()
  console.log(userId)

  const [sessions, setSessions] = useState([])
  console.log(sessions)

  useEffect(() => {
    getUserAverageSessions(userId).then((users) => {
      setSessions(users)
    })
  }, [])
  console.log(sessions)
  let days = sessions.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: 'L' }
      case 2:
        return { ...data, day: 'M' }
      case 3:
        return { ...data, day: 'M' }
      case 4:
        return { ...data, day: 'J' }
      case 5:
        return { ...data, day: 'V' }
      case 6:
        return { ...data, day: 'S' }
      case 7:
        return { ...data, day: 'D' }
      default:
        return { ...data }
    }
  })

  return (
    <div>
      <p>Durée moyenne des sessions</p>

      <LineChart
        width={500}
        height={300}
        data={days}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          axisLine={false}
          //   tickLine={false}
          //   tick={{
          //     fontSize: 12,
          //     fontWeight: 500,
          //   }}
        />
        <YAxis dataKey="sessionLength" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
