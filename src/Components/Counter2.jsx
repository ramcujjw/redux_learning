import React from 'react'
import { connect } from 'react-redux';

const Counter2 = ({value}) => {

  return (
    <div>
      Counter2 : {value}<br/>
 
    </div>
  )
}

const mapState=(state)=>({value:state})

export default connect(mapState) (Counter2)
