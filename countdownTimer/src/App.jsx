import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value=""
  min="2024-06-07T00:00"
  max="2025-06-14T00:00" />
    </>
  )
}

export default App
