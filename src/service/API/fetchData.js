export async function getUserById(userId) {
  console.log(userId)
  const response = await fetch(`http://localhost:3000/user/${userId}`)

  const json = await response.json()

  console.log(json.data)

  const user = json.data

  return user.userInfos.firstName
}

export async function getUserScore(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}`)
  const json = await response.json()

  // const userScore = json.data.find((u) => {
  //   // console.log(typeof id)
  //   // console.log(typeof u.id)
  //   // console.log(typeof u.userInfos.firstName)
  //   return u.id === +id
  // })
  const userScore = json.data

  return userScore.todayScore || userScore.score
}

export async function getUserPerformance(userId) {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  )

  const json = await response.json()

  const userPerformance = json.data

  return userPerformance.data
}

export async function getUserAverageSessions(userId) {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  )
  const json = await response.json()

  const user = json.data

  return user.sessions
}

export async function getUserActivity(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
  const json = await response.json()

  const userActivity = json.data

  return userActivity.sessions
}
