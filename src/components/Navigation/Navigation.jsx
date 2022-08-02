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
            </div>
        </div>
    </Helmet>
  )
}

export default Navigation