import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../PieChartScore/PieChartScore.scss'
// import { getUserScore } from '../../service/mock/userData.js'
import { getUserScore } from '../../service/API/fetchData'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'

/**
 * Creation of the component that renders the Piechart
 * @returns piechart with user score data
 */
export default function PieChartScore() {
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
  })
  const data = [
    {
      name: 'A',
      value: 2400,
    },
  ]
  return (
    <div className="piechart-container chart-content">
      <p className="piechart-title">Score</p>
      <p className="piechart-score">
        <span className="score-percent">{scorePercent}%</span>{' '}
        <span className="score-text">
          <br></br>de votre <br></br>objectif
        </span>
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
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
            cornerRadius={87}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
