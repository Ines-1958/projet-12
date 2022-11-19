import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../LineChartActivity/LineChartActivity.scss'
// import { getUserAverageSessions } from '../../service/mock/userData.js'
import { getUserAverageSessions } from '../../service/API/fetchData'
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
  // console.log(userId)

  const [sessions, setSessions] = useState([])
  // console.log(sessions)

  useEffect(() => {
    getUserAverageSessions(userId).then((users) => {
      setSessions(users)
    })
  }, [])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip-session">
          <p className="label-average-session">{` ${payload[0].value} min`}</p>
        </div>
      )
    }

    return null
  }

  // console.log(sessions)
  let formattedDays = sessions.map((data) => {
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
    <div className="line-chart chart-content">
      <div className="line-chart-container">
        <p className="linechart-title">
          Durée moyenne des <br></br>sessions
        </p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            // width={500}
            // height={300}
            data={formattedDays}
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
            // margin={{ top: 0, right: 16, bottom: 24, left: 16 }}
            margin={{ top: 2, right: 20, bottom: 3, left: 20 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis
              dataKey="day"
              // tick={false}
              axisLine={false}
              // stroke="rgba(255, 255, 255, 0.6)"

              stroke="#FFFFFF"
              tickLine={false}
              tick={{
                fontSize: 12,
              }}
              fillOpacity={0.5}
            />
            <YAxis
              dataKey="sessionLength"
              hide={true}
              tickLine={false}
              // domain={[10, "dataMax + 70"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              // cursor={{ stroke: 'black' }}
              wrapperStyle={{ outline: 'none' }}
              cursor={{ stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 79 }}
            />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="sessionLength"
              // stroke="#FFFFFF"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={2}
              //   activeDot={{ r: 8 }}
              active
              dot={false}
              activeDot={{ stroke: '#FFFFFF', strokeWidth: 2, r: 5 }}
              // fillOpacity={0.1}
              cornerRadius={50}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
