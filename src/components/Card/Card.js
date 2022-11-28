import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//Mocked data
// import { getUserData } from '../../service/mock/userData.js'

//Api data
import { getUserData } from '../../service/API/fetchData'

import '../Card/Card.scss'
import caloriesIcon from '../../assets/caloriesIcon.png'
import carbsIcon from '../../assets/carbsIcon.png'
import fatIcon from '../../assets/fatIcon.png'
import proteinIcon from '../../assets/proteinIcon.png'

/**
 * Creation of the component rendering the cards according to the user's data
 * @returns the cards containing calorieCount, proteinCount, carbohydrateCount and lipidCount user's data
 */
export default function Card() {
  const { userId } = useParams()

  const [datas, setDatas] = useState('')

  useEffect(() => {
    getUserData(userId).then((users) => {
      setDatas(users)
    })
  }, [])

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
