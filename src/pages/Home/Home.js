import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
// import '../classData/userData.js'
import '../../classData/userData.js'
// import getUser, { UserData } from '../classData/userData'
// import getUser, { UserData } from '../../classData/userData.js'
// import { getUser } from '../../classData/userData.js'
import Dashboard from '../Dashboard/Dashboard'

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
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function Home(props) {
  const { id } = useParams()
  // console.log(id)

  // const [dataUser, setDataUser] = useState([])
  // console.log(dataUser)

  // useEffect(() => {
  //   // setDataUser(getUser())
  //   getUser().then((t) => setDataUser(t))
  //   console.log(getUser)

  //   console.log(dataUser)
  // }, [])
  // console.log(dataUser)

  return (
    <div>
      <Header />
      <NavBar />
      <Dashboard />

      {/* {dataUser &&
          dataUser
            .filter((user) => user.userInfos.firstName === 'Karl')
            .map((user) => <p>Bonjour {user.userInfos.firstName}</p>)} */}
    </div>
  )
}
