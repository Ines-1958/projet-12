export class UserData {
  constructor(id, userInfos, score, todayScore, kind, userId) {
    this._id = id
    this._userInfos = userInfos

    if (score) {
      this._todayScore = score
    } else if (todayScore) {
      this._todayScore = todayScore
    }

    this._userId = userId
    this._kind = kind
  }
}

// export default async function getUser() {
//   const response = await fetch('/datas/userData.json')
//   console.log(response)
//   const json = await response.json()
//   console.log(json)
//   console.log(json.data)
//   console.log(json.data[1].id)
//   return json.data
// }
export async function getUser() {
  const response = await fetch('/datas/userData.json')
  console.log(response)
  const json = await response.json()

  return json.data
}

export async function getUserById(id) {
  const response = await fetch('/datas/userData.json')
  const json = await response.json()

  // const user = json.data.find((u) => {
  //   console.log(typeof id)
  //   console.log(typeof u.id)
  //   console.log(typeof u.userInfos.firstName)
  //   return u.id === +id
  // })

  const user = json.data.find((u) => u.id === +id)

  return user.userInfos.firstName
}

export async function getUserPerformance(userId) {
  const response = await fetch('/datas/userPerformance.json')
  console.log(response)
  const json = await response.json()
  console.log(json)
  console.log(json.data)

  // const userActivity = json.data.find((u) => u.id === id)
  // console.log(userActivity)
  // return userActivity.kind

  const userPerformance = json.data.find((u) => {
    console.log(typeof userId)
    console.log(typeof u.userId)
    console.log(typeof u.kind[1])
    return u.userId === +userId
  })

  // const test = userActivity.kind.map()
  console.log(userPerformance)
  return userPerformance
}

export async function getUserData(id) {
  const response = await fetch('/datas/userData.json')
  const json = await response.json()

  const user = json.data.find((u) => u.id === +id)

  return user.keyData
}

export async function getUserScore(id) {
  const response = await fetch('/datas/userData.json')
  const json = await response.json()

  const userScore = json.data.find((u) => {
    console.log(typeof id)
    console.log(typeof u.id)
    console.log(typeof u.userInfos.firstName)
    return u.id === +id
  })

  // const userScore = json.data.find((user) => user.id === +id)
  console.log(userScore)
  // if (typeof user === undefined) {
  //   return userScore.todayScore || userScore.score
  // }
  return userScore.todayScore * 100 || userScore.score * 100
}

export async function getUserAverageSessions(userId) {
  const response = await fetch('/datas/userAverageSessions.json')
  const json = await response.json()

  const user = json.data.find((u) => u.userId === +userId)
  console.log(user)

  return user.sessions
}

export async function getUserActivity(userId) {
  const response = await fetch('/datas/userActivity.json')
  const json = await response.json()

  const userActivity = json.data.find((user) => user.userId === +userId)
  console.log(userActivity)

  return userActivity.sessions
}
