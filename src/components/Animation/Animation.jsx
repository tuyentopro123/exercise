import React from 'react'
import './Animation.css'
import Helmet from "../utils/Helmet/Helmet"
import MovingBar from './AnimateBox/MovingBar/MovingBar'
import RingBell from './AnimateBox/RingBell/RingBell'
import LoadingBar from './AnimateBox/LoadingBar/LoadingBar'
import MovingSquare from './AnimateBox/MovingSquare/MovingSquare'
import Clock from './AnimateBox/Clock/Clock'
import Pacman from './AnimateBox/Pacman/Pacman'
import Battery from './AnimateBox/Battery/Battery'
import Spinner from './AnimateBox/Spinner/Spinner'

const Animation = () => {
  return (
    <Helmet title="Animation">
      <div className="animation">
          <div className="animation-container">
              <div id="box1" className="animation-box">
                <LoadingBar/>
              </div>
              <div id="box2" className="animation-box">
                <RingBell/>
              </div>
              <div id="box3" className="animation-box">
                <Clock/>
              </div>
              <div id="box4" className="animation-box">
                <MovingSquare/>
              </div>
              <div id="box5" className="animation-box">
                <MovingBar/>
              </div>
              <div id="box6" className="animation-box">
                <Pacman/>
              </div>
              <div id="box7" className="animation-box">
                <Battery/>
              </div>
              <div id="box8" className="animation-box">
                <Spinner/>
              </div>
          </div>
      </div>
    </Helmet>
  )
}

export default Animation