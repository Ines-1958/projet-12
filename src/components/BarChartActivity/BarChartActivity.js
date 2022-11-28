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

/**
 * Creation of the Barchart with recharts
 * @returns the barchart with the user's daily activity
 */
export default function BarChartActivity() {
  const { userId } = useParams()
  const [dataActivity, setDataActivity] = useState([])

  useEffect(() => {
    getUserActivity(userId).then((users) => {
      setDataActivity(users)
    })
  }, [])

  /**
   * Converting dates to days of the week
   * @returns {{day: number, kilogram: number, calories: number}}
   */
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

  /**
   * Legend text color customization
   * @param { string } value
   * @returns legend text color customized
   */
  const renderColorfulLegendText = (value) => {
    return <span style={{ color: '#74798C' }}>{value}</span>
  }

  /**
   * Tooltip customization
   * @param {*} param0
   * @returns the customized tooltip with the data displayed in Kg and Kcal
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` ${payload[0].value} kg`}</p>
          <p className="label">{`${payload[1].value} Kcal`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <div className="barchart-container">
      <p className="barchart-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%" aspect={600 / 150}>
        <BarChart
          data={formattedDate}
          barSize={7}
          barGap={8}
          barCategoryGap={18}
          style={{
            padding: '20px',
            overflow: 'visible',
            height: 'auto',
          }}
          margin={{
            top: 25,
            right: 0,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            padding={{ left: -30, right: -20 }}
            style={{ fill: '#9B9EAC', fontSize: 14 }}
          />
          <YAxis yAxisId="left" dataKey="calories" hide={true} />
          <YAxis
            yAxisId="right"
            orientation={'right'}
            dataKey="kilogram"
            tickCount={3}
            axisLine={false}
            tickLine={false}
            style={{ fill: '#9B9EAC', fontSize: 14 }}
            domain={['dataMin -2', 'dataMax +1']}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={8}
            formatter={renderColorfulLegendText}
          />
          <Bar
            dataKey="kilogram"
            yAxisId="right"
            fill="#282D30"
            name="Poids (kg)"
            radius={[8, 8, 0, 0]}
          />
          <Bar
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            name="Calories brulées (kCal)"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
