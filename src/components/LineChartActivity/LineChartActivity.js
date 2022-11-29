import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../LineChartActivity/LineChartActivity.scss'
// import { getUserAverageSessions } from '../../service/mock/userData.js'
import { getUserAverageSessions } from '../../service/API/fetchData'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

/**
 * Creation of the component that renders the Linechart with recharts
 * @returns  linechart with user average sessions data
 */
export default function LineChartActivity() {
  const { userId } = useParams()

  const [sessions, setSessions] = useState([])

  useEffect(() => {
    getUserAverageSessions(userId).then((users) => {
      setSessions(users)
    })
  }, [userId])

  /**
   * Tooltip customization
   * @param {*} param0
   * @returns the customized tooltip with the data displayed in min
   */
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

  /**
   * Converting day key value from number to string (weekday initials)
   * @returns {{day: string, sessionLength: number}}
   */
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
            data={formattedDays}
            margin={{ top: 6, right: 20, bottom: 3, left: 20 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              stroke="#FFFFFF"
              tickLine={false}
              tick={{
                fontSize: 12,
              }}
              fillOpacity={0.5}
            />
            <YAxis dataKey="sessionLength" hide={true} tickLine={false} />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
              cursor={{ stroke: 'rgba(0, 0, 0, 0.1)', strokeWidth: 79 }}
            />

            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={2}
              dot={false}
              activeDot={{ fill: '#FFFFFF', r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
