import React from 'react'
import './FlagItem.css'
import CloseIcon from '@mui/icons-material/Close';

const FlagItem = ({options}) => {
  const handleClose = () => {
    
  }

  return (
    <div className={`flag-item ${options.status}`}>
      <div className="flag-box">
        <div className="flag-status">
          {options.svg}
        </div>

        <div className="flag-content">
            <h3>{options.title}</h3>
            <p>{options.desc}</p>
            <div className="feedback">
              <span className="feedback-item" onClick={handleClose}>Understood</span>
              {" · "}
              <span className="feedback-item" onClick={handleClose}>No thanks</span>
            </div>
        </div>

        <div className="flag-close">
            <CloseIcon sx={{fontSize: 25}}/>  
        </div>
      </div>
    </div>
  )
}

export default FlagItem