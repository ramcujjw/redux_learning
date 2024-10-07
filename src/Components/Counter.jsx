import React from 'react'
import { useState } from 'react';
import {IncrementAction, DecrementAction } from '../action'
import { connect } from 'react-redux';

const Counter = ({value,IncrementAction,DecrementAction}) => {
   // const [count, setCount] = useState(0); //always track the count variable
  //setCount is a set manager
  //count and setCount are variable names
  //'useState(0)' means the variable is initialized to 0

  // const increment = ()=>{
  // //  var val = document.getElementById('val').textContent
  // //  val++
  // //  document.getElementById('val').textContent = val
  // setCount(count+1)
   
  // } 
  
  const decrement = ()=>{
    // var val = document.getElementById('val').textContent
    // val--
    // document.getElementById('val').textContent = val
    setCount(count-1)
   } 
  return (
    <div>
      Counter : {value}<br/>
      {/* <p>Counter:</p><p id='val'>{count}</p> */}
    <button type="button" onClick={IncrementAction}>Increment</button>
    <button type="button" onClick={DecrementAction}>Decrement</button>
    <br />
    
     
    </div>
  )
}

//mapping function of state

const mapStateToProps=(state)=>({value:state})//returning object with a field value

//use a mapping function for actions

const mapDispatchToProps={
  IncrementAction,
  DecrementAction
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter)//state changes and actions and encpasulate with counter
