import React from 'react'
import './Clock.css'

const Clock = () => {
  return (
    <div className="clock">
        <div className="clock-container">
            <div className="clock-hours"></div>
            <div className="clock-minutes"></div>
        </div>
    </div>
  )
}

export default Clock