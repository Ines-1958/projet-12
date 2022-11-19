import React, { useState, useEffect } from 'react'
import '../BarChartActivity/BarChartActivity.scss'
// import { getUserActivity} from '../../service/mock/userData.js'
import { getUserActivity } from '../../service/API/fetchData'
import { useParams } from 'react-router-dom'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// const monthTickFormatter = (tick) => {
//   const date = new Date(tick)

//   return date.getMonth() + 1
// }

// const renderQuarterTick = (tickProps) => {
//   const { x, y, payload } = tickProps
//   const { value, offset } = payload
//   const date = new Date(value)
//   const month = date.getMonth()
//   const quarterNo = Math.floor(month / 3) + 1

//   if (month % 3 === 1) {
//     return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>
//   }

//   const isLast = month === 11

//   if (month % 3 === 0 || isLast) {
//     const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5

//     return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />
//   }
//   return null
// }

export default function BarChartActivity() {
  const { userId } = useParams()
  const [dataActivity, setDataActivity] = useState([])

  useEffect(() => {
    // console.log(userId)
    getUserActivity(userId).then((users) => {
      setDataActivity(users)
    })
  }, [])

  // console.log(dataActivity)

  // let Kcal = (cal) => {
  //   console.log(cal.calories)
  //   return cal.calories
  // }
  //   console.log(Kcal)
  //   function Kcal(c) {
  //     console.log(c.calories)
  //     console.log(c)
  //     // return c.calories
  //   }

  // let Kg = (K) => {
  //   return K.kilogram
  // }
  // console.log(Kg)

  const formattedDate = dataActivity.map((data, index) => {
    switch (new Date(data.day).getDate()) {
      case 1:
        return { ...data, day: '1' }
      case 2:
        return { ...data, day: '2' }
      case 3:
        return { ...data, day: '3' }
      case 4:
        return { ...data, day: '4' }
      case 5:
        return { ...data, day: '5' }
      case 6:
        return { ...data, day: '6' }
      case 7:
        return { ...data, day: '7' }
      default:
        return { ...data }
    }
  })

  const renderColorfulLegendText = (value, entry) => {
    // const { color } = entry

    return <span style={{ color: '#74798C' }}>{value}</span>
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value} kg`}</p>
          {/* <p className="intro">{getIntroOfPage(label)}</p> */}
          <p className="label">{`${payload[1].value} Kcal`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <div className="barchart-container">
      <p className="barchart-title">Activité quotidienne</p>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          width={500}
          height={300}
          //   data={data}
          data={formattedDate}
          //   margin={{
          //     top: 5,
          //     right: 30,
          //     left: 20,
          //     bottom: 5,
          //   }}
          margin={{
            top: 25,
            right: 0,
            left: 20,
            bottom: 5,
          }}
          barSize={7}
          barGap={8}
          barCategoryGap={18}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          {/* <XAxis dataKey="date" tickFormatter={monthTickFormatter} /> */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            // interval={0}
            // tick={renderQuarterTick}
            //   height={70}
            // scale="band"
            // xAxisId="quarter"
            padding={{ left: -39, right: -39 }}
            style={{ fill: '#9B9EAC', fontSize: 14 }}
          />
          {/* <YAxis
      //   yAxisId="kilogram" orientation={'right'}
      /> */}
          <YAxis dataKey="calories" hide={true} />
          <YAxis
            yAxisId="kilogram"
            orientation={'right'}
            //   dataKey={Kg}
            dataKey="kilogram"
            domain={['dataMin -2', 'dataMax +1']}
            // dx={15}
            style={{ fill: '#9B9EAC', fontSize: 14 }}
            tickCount="3"
            // hide={false}
            // type="number"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          {/* <Legend /> */}
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            height={40}
            formatter={renderColorfulLegendText}
          />
          {/* <Bar dataKey="pv" fill="#282D30" /> */}
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            name="Poids (Kg)"
            radius={[8, 8, 0, 0]}
          />
          {/* <Bar dataKey="uv" fill="#E60000" barSize={7} /> */}
          <Bar
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (KCal)"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
