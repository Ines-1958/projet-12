import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../classData/userData'
// import getUser, { userData } from '../../classData/userData'
// import { getUser } from '../../classData/userData'
import { getUserScore } from '../../classData/userData.js'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// const chartData = [
//   {
//     name: '18-24',
//     uv: 31.47,
//     pv: 2400,
//     fill: 'red',
//   },
//   {
//     name: '25-29',
//     uv: 26.69,
//     pv: 4567,
//     fill: '#83a6ed',
//   },
// ]

const score = [{ name: 'A', x: 1, fill: '#FF0000' }]

export default function RadialBarScore(props) {
  // Sample data
  // const chartData = [{ name: 'A', x: 1, fill: '#FF0000' }]
  const { userId } = useParams()

  const [score, setScore] = useState()

  useEffect(() => {
    getUserScore(userId).then((t) => setScore(t))
    console.log(getUserScore)

    console.log(score)
  })
  console.log(score)

  const scoreData = [
    {
      name: 'A',
      uv: score,

      fill: ' #FF0000',
    },
    {
      name: '100',
      uv: 100,

      fill: '#FFFFFF',
    },
  ]
  console.log(scoreData)

  return (
    <div>
      <p>Score</p>

      <p className="welcome">
        <span>{score}</span> % de votre objectif
      </p>

      {/* <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        // data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: 'insideStart', fill: '#fff' }}
          background
          clockWise
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          // wrapperStyle={style}
        />
      </RadialBarChart> */}

      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <RadialBarChart
        width={730}
        height={250}
        data={scoreData}
        // cx={80}
        // cy={100}
        innerRadius={80}
        outerRadius={100}
        startAngle={90}
        endAngle={360}
      >
        <RadialBar dataKey="uv" cornerRadius={50} />
      </RadialBarChart>
      {/* </ResponsiveContainer> */}
    </div>
  )
}
