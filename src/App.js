import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'

/**
 * Generates the routes for each page
 * @returns the path for each page
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
