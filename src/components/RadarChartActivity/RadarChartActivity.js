import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../RadarChartActivity/RadarChartActivity.scss'
import '../../service/mock/userData.js'
import { getUserPerformance } from '../../service/API/fetchData'
// import { getUserPerformance } from '../../service/mock/userData.js'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'

/**
 * Creation of the component that renders the Radarchart
 * @returns radarchart from the user's performance data
 */
export default function RadarChartActivity() {
  const { userId } = useParams()

  const [activity, setActivity] = useState([])

  useEffect(() => {
    getUserPerformance(userId).then((t) => setActivity(t))
  }, [])

  /**
   * Translates the value of kind from English to French
   * @returns {{value: number, kind: string}} the value of the kind in French
   */
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

  return (
    <div className="radar-chart-container chart-content">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={formattedKind}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFFFFF"
            tick={{ fontSize: 11 }}
            tickLine={false}
          />

          <Radar
            dataKey="value"
            fill="rgba(255, 1, 1, 0.7)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
