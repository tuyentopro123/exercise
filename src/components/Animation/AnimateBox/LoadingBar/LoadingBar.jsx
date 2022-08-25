import React from 'react'
import "./LoadingBar.css"

const LoadingBar = () => {
  return (
    <div className="loading-bar">
        <div class="loading-spinner">
            <div class="loading-item h1"></div>
            <div class="loading-item h2"></div>
            <div class="loading-item h3"></div>
            <div class="loading-item h2"></div>
            <div class="loading-item h1"></div>
        </div>
    </div>
  )
}

export default LoadingBar