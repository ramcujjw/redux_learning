import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); //always track the count variable
  //setCount is a set manager
  //count and setCount are variable names
  //'useState(0)' means the variable is initialized to 0

  const increment = ()=>{
  //  var val = document.getElementById('val').textContent
  //  val++
  //  document.getElementById('val').textContent = val
  setCount(count+1)
   
  } 
  
  const decrement = ()=>{
    // var val = document.getElementById('val').textContent
    // val--
    // document.getElementById('val').textContent = val
    setCount(count-1)
   } 
  return (
    <div>
      <p>Counter:</p><p id='val'>{count}</p>
    <button type="button" onClick={increment}>Increment</button>
    <button type="button" onClick={decrement}>Decrement</button>
     
    </div>
  )
}

export default Counter
