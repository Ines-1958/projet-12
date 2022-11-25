//Retrieving mocked user data

/**
 *
 * @returns
 */
export async function getUser() {
  const response = await fetch('/datas/userData.json')

  const json = await response.json()

  return json.data
}

/**
 * Return firstname of the user
 * @param { string } id id of the user
 * @returns { string } Firstname of the user
 */
export async function getUserById(id) {
  const response = await fetch('/datas/userData.json')
  const json = await response.json()

  // const user = json.data.find((u) => {
  //   console.log(typeof id)
  //   console.log(typeof u.id)
  //   console.log(typeof u.userInfos.firstName)
  //   return u.id === +id
  // })
  console.log(typeof id)

  const user = json.data.find((u) => u.id === +id)

  console.log(user.userInfos.firstName)
  console.log(typeof user.userInfos.firstName)

  return user.userInfos.firstName
}

/**
 * Retrieves user performance data
 * @param { string } userId
 * @returns {Promise<{value: number, kind: number}[]>}
 */
export async function getUserPerformance(userId) {
  const response = await fetch('/datas/userPerformance.json')

  const json = await response.json()

  console.log(typeof userId)

  const userPerformance = json.data.find((u) => {
    return u.userId === +userId
  })

  return userPerformance.data
}

/**
 *
 * @param { string } id
 * @returns {Promise<{calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number}>}
 */
export async function getUserData(id) {
  const response = await fetch('/datas/userData.json')
  const json = await response.json()

  console.log(typeof id)

  const user = json.data.find((u) => u.id === +id)
  console.log(typeof user.keyData)
  console.log(user.keyData)

  return user.keyData
}

/**
 * User score retrieval
 * @param { string } id user's id
 * @returns {Promise<number>} the user's score
 */
export async function getUserScore(id) {
  const response = await fetch('/datas/userData.json')
  const json = await response.json()

  const userScore = json.data.find((u) => {
    console.log(typeof id)

    return u.id === +id
  })

  return userScore.todayScore || userScore.score
}

/**
 * Function to retrieve data related to average user sessions
 * @param { string } userId the id of the user
 * @returns {Promise<{day: number, sessionLength: number}[]>} an array of objects containing the average user sessions
 */
export async function getUserAverageSessions(userId) {
  const response = await fetch('/datas/userAverageSessions.json')
  const json = await response.json()

  const user = json.data.find((u) => u.userId === +userId)

  return user.sessions
}

/**
 * Retrieve user activity information
 * @param { string } userId id of the user
 * @returns {Promise<{day: string, kilogram: number, calories: number}[]>} information about user activity
 */
export async function getUserActivity(userId) {
  const response = await fetch('/datas/userActivity.json')
  const json = await response.json()

  const userActivity = json.data.find((user) => user.userId === +userId)

  return userActivity.sessions
}
