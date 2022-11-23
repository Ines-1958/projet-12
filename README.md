# Projet 12 - SportSee

SportSee is a startup dedicated to sports coaching.
This project is part of a new version of the user's profile page, which will allow him to follow the number of sessions carried out as well as the number of calories burned.

### 1. Prerequisites
  - NodeJS
  - Yarn (or npm)

### 2. Installation

You have the choice between yarn and npm

### 2.1 Backend API
Clone the repository https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git on your computer.
This will allow access to the API locally, which is useful for the operation of this project.

  - The yarn command will allow you to install the dependencies.
  - The yarn dev command will allow you to run the micro API.

### 2.2 Front APP

Clone the https://github.com/Ines-1958/project-12.git repository locally.
  - Open a new terminal and install the node_modules via the npm install command.
  - In order to launch the project on your browser, type the command npm start

### 3. Usage

The current data are those from the API; to swap with the mocked data, simply comment out the path from the api and uncomment the one from the mock; for example in the dashboard, the import { getUserById } from '../../service/API/fetchData' refers to the user by his id via the api and for the mock, import { getUserById } from '.. /../service/mock/userData.js'.

### 4. Endpoints

### 4.1 Possible endpoints

**There are four possible endpoints to retrieve data from the API**

  - http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
  - http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
  - http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
  - http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

### 4.2 Queries
  
  **Currently only two users have been mocked. They have userId 12 and 18 respectively.**
  
  Here are some sample queries
  - http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
  - http://localhost:3000/user/18 - Retrieves user 18's main information.
  

### 5. Author

Inès MASSA, student at Openclassrooms

