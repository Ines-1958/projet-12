//Fetch user data from api

/**
 * Retrieve firstname of the user
 * @param { string } userId
 * @returns {Promise<string> } Firstname of the user
 */
export async function getUserById(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}`)

  const json = await response.json()

  const user = json.data

  return user.userInfos.firstName
}

/**
 * User score retrieval
 * @param { string } userId
 * @returns {Promise<number>}
 */
export async function getUserScore(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}`)
  const json = await response.json()

  const userScore = json.data

  return userScore.todayScore || userScore.score
}

/**
 * Retrieves user performance data
 * @param { string } userId
 * @returns {Promise<{value: number, kind: number}[]>}
 */
export async function getUserPerformance(userId) {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/performance`
  )

  const json = await response.json()

  const userPerformance = json.data

  return userPerformance.data
}

/**
 * Function to retrieve data related to average user sessions
 * @param { string } userId the id of the user
 * @returns {Promise<{day: number, sessionLength: number}[]>} an array of objects containing the average user sessions
 */
export async function getUserAverageSessions(userId) {
  const response = await fetch(
    `http://localhost:3000/user/${userId}/average-sessions`
  )
  const json = await response.json()

  const user = json.data

  return user.sessions
}

/**
 * Retrieve user activity information with api data
 * @param { string } userId id of the user
 * @returns {Promise<{day: string, kilogram: number, calories: number}[]>} information about user activity
 */
export async function getUserActivity(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
  const json = await response.json()

  const userActivity = json.data

  return userActivity.sessions
}

/**
 *
 * @param { string } id
 * @returns {Promise<{calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number}>}
 */
export async function getUserData(userId) {
  const response = await fetch(`http://localhost:3000/user/${userId}`)
  const json = await response.json()

  const user = json.data

  return user.keyData
}
