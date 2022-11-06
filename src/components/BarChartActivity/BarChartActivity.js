import React, { useState, useEffect } from 'react'
import '../BarChartActivity/BarChartActivity.scss'
import { getUserActivity, UserData } from '../../classData/userData.js'
import { useParams } from 'react-router-dom'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    date: '2000-01',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-02',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2000-03',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '2000-04',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-05',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '2000-06',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '2000-07',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    date: '2000-08',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '2000-09',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '2020-07-01',
    uv: 80,
    pv: 240,
  },
  {
    date: '2000-11',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '2000-12',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
]

const monthTickFormatter = (tick) => {
  const date = new Date(tick)

  return date.getMonth() + 1
}

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

  //   useEffect(() => {
  //     getUserActivity(userId).then((t) => setDataActivity(t))
  //     console.log(getUserActivity)
  //     console.log(dataActivity)
  //   }, [])

  useEffect(() => {
    console.log(userId)
    getUserActivity(userId).then((users) => {
      setDataActivity(users)
    })
  }, [])

  console.log(dataActivity)
  //   const activityData = dataActivity.map((data, index) => {
  //     return {
  //       day: (index + 1).toString(),
  //       'Poids kg': dataActivity.kilogram,
  //       'Calories brûlées': dataActivity.calories,
  //     }
  //   })
  let Kcal = (cal) => {
    console.log(cal.calories)
    return cal.calories
  }
  //   console.log(Kcal)
  //   function Kcal(c) {
  //     console.log(c.calories)
  //     console.log(c)
  //     // return c.calories
  //   }

  let Kg = (K) => {
    return K.kilogram
  }
  console.log(Kg)

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
    const { color } = entry

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
        //   barSize={7}
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
        <Tooltip content={<CustomTooltip />} />
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
    </div>
  )
}
