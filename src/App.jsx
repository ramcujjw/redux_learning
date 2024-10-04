import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) //hooks

  return (
    <>
     
      <h1>Count</h1>
      <div className="card">
        <h4>Counter:{count}</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          increment 
        </button>
        
        <button onClick={() => setCount((count) => count - 1)}>
          decrement 
        </button>
       
      </div>
      
    </>
  )
}

export default App
