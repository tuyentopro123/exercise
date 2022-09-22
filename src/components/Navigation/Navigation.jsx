import React from 'react'
import "./Navigation.css"
import Helmet from '../utils/Helmet/Helmet'
import NavigateTop from './NavigateTop/NavigateTop'

const Navigation = () => {
  return (
    <Helmet title="Navigation">
        <div className="navigation">
            <div className="navigation-header">
                <NavigateTop/>
                <input type="date" placeholder="YYYY-MM-DD" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" onChange={(e) => console.log(e.target.value)}/>
            </div>
        </div>
    </Helmet>
  )
}

export default Navigation