import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import store from './store'
import Counter2 from './Components/Counter2'

function App() {
  const [count, setCount] = useState(0) //hooks

  return (
     //first store keyword
    <>
    <Provider store={store}>    
      <Counter/>
      <Counter2/>
    </Provider>

     
      {/* <h1>Count</h1>
      <div className="card">
        <h4>Counter:{count}</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          increment 
        </button>
        
        <button onClick={() => setCount((count) => count - 1)}>
          decrement 
        </button>
       
      </div> */}
      
    </>
  )
}

export default App
