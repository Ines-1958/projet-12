import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getUserData, UserData } from '../../classData/userData.js'
import '../Card/Card.scss'
import caloriesIcon from '../../assets/caloriesIcon.png'
import carbsIcon from '../../assets/carbsIcon.png'
import fatIcon from '../../assets/fatIcon.png'
import proteinIcon from '../../assets/proteinIcon.png'

export default function Card() {
  const { userId } = useParams()
  console.log(userId)

  const [datas, setDatas] = useState('')
  console.log(datas)

  useEffect(() => {
    console.log(userId)
    getUserData(userId).then((users) => {
      setDatas(users)
      console.log(datas)
    })
    console.log(datas)
  }, [])
  console.log(datas)

  return (
    <div className="data-container">
      <div className="data-content">
        <img src={caloriesIcon} alt="" />
        <div className="title-content">
          <p>{datas.calorieCount}kCal </p>
          <p className="title">Calories</p>
        </div>
      </div>

      <div className="data-content">
        <img src={proteinIcon} alt="" />
        <div className="title-content">
          <p>{datas.proteinCount}g </p>
          <p className="title">Proteines</p>
        </div>
      </div>

      <div className="data-content">
        <img src={carbsIcon} alt="" />
        <div className="title-content">
          <p>{datas.carbohydrateCount}g </p>
          <p className="title">Glucides</p>
        </div>
      </div>

      <div className="data-content">
        <img src={fatIcon} alt="" />
        <div className="title-content">
          <p>{datas.lipidCount}g </p>
          <p className="title">Lipides</p>
        </div>
      </div>
    </div>
  )
}
