import React from 'react'
import Graphic from '../graphic'

function Main() {
  return (
    <>
    <div className='main'>
        <h1>Spending - Last 7 days</h1>
        <Graphic/>
        <div className='footer'>
        <div className='rigth'>
        <span>Total this month</span>
        <p className='bold'>$478.33</p>
        </div>
        <div className='left'>
        <p className='bold'>+2.4% </p>
        <span>from last month</span>
        </div>
        </div>
    </div>
    </>
  )
}

export default Main