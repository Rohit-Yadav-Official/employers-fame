import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobsDashboard from "./components/jobDashBoard/jobBoardDashBoard"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <JobsDashboard/>
    </>
  )
}

export default App
