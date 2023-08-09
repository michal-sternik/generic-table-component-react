import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>basic project structure done</h1>
      <button onClick={() => setCount(count+1)}>{count}</button>
    </>
  )
}

export default App
