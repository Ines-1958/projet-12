// import logo from './logo.svg';
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import RadialBarScore from './components/RadialBarScore/RadialBarScore'
import RadarChartActivity from './components/RadarChartActivity/RadarChartActivity'
import Card from './components/Card/Card'
import LineChartActivity from './components/LineChartActivity/LineChartActivity'
import BarChartActivity from './components/BarChartActivity/BarChartActivity'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
        <Route path="/user/:userId" element={<RadialBarScore />} />
        <Route path="/activity/:userId" element={<RadarChartActivity />} />
        <Route path="/card/:userId" element={<Card />} />
        <Route path="/linechart/:userId" element={<LineChartActivity />} />
        <Route path="/barchart/:userId" element={<BarChartActivity />} />
      </Routes>
    </div>
  )
}

export default App
