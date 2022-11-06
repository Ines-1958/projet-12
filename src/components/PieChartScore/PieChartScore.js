import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../classData/userData'
// import getUser, { userData } from '../../classData/userData'
// import { getUser } from '../../classData/userData'
import { getUserScore } from '../../classData/userData.js'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

export default function PieChartScore(props) {
  const { userId } = useParams()

  const [score, setScore] = useState('')
  const [scorePercent, setScorePercent] = useState()
  const [scoreDegree, setScoreDegree] = useState()

  useEffect(() => {
    getUserScore(userId).then((t) => {
      setScore(t)
      setScorePercent(score * 100)
      setScoreDegree(score * 360 + 90)
    })

    console.log(score)
  })
  const data = [
    {
      name: 'A',
      value: 2400,
    },
  ]
  return (
    <div className="radialbar-container">
      <p>Score</p>
      <p className="welcome">{scorePercent}% de votre objectif</p>

      <PieChart width={730} height={250}>
        <Pie
          endAngle={scoreDegree}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={70}
          fill="#ff0000"
          data={data}
          startAngle={90}
        />
      </PieChart>
    </div>
  )
}
