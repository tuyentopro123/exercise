import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className="spinner">
        <div class="spinner-container">
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
            <div class="spinner-item"></div>
        </div>
    </div>
  )
}

export default Spinner