import React from 'react'
import Footer from './Footer';
import './image.css'
import PropTypes from 'prop-types'
const Contents = () => {
  
  return (
    <div>
      
        <img src="./bg2.jpeg" className='image' alt="Girl in a jacket"></img>
        <center>
        <h1 style={{ fontFamily: 'lato,sans-serif'}}>Uchechukwu Emmanuel</h1>
        <br></br>
        <p>Graduate from Semicolon-Africa.</p>
        <br></br>
        <button className='btn-primary'>Read More</button>
      </center> 
    </div>   
  )
}


export default Contents