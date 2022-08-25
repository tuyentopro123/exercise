import React from 'react'
import './MovingBar.css'

const MovingBar = () => {
  return (
    <div className="moving-bar">
        <span className="music-bar">
            <span className="bar1 bg-primary"></span>
            <span className="bar2 bg-info"></span>
            <span className="bar3 bg-success"></span>
            <span className="bar4 bg-warning"></span>
            <span className="bar5 bg-danger"></span>
        </span>
    </div>
  )
}

export default MovingBar