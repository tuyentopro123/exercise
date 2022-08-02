import React from 'react'
import "./AvatarGroup.css"

const AvatarGroup = ({children,max = 6}) => {
    const getSize = (e) => {
        var length = ""
        switch(e) {
            case "xxlarge":
                length = "128px"
                break;
            case "xlarge":
                length = "96px"
                break;
            case "large":
                length = "40px"
                break;  
            case "small":
                length = "24px"
                break; 
            case "xsmall":
                length = "16px"
                break;                  
            default:
                length = "32px"
            }
        return length
    }

    const getFontSize = (e) => {
        var length = ""
        switch(e) {
            case "xxlarge":
                length = "60px"
                break;
            case "xlarge":
                length = "45px"
                break;
            case "large":
                length = "18px"
                break;  
            case "small":
                length = "10px"
                break; 
            case "xsmall":
                length = "4px"
                break;                  
            default:
                length = "14px"
            }
        return length
    }
  return (
    <div className="group">
        {children.length > parseInt(max) &&
            <div className="more" style={{width:getSize(children[0].props.size),height:getSize(children[0].props.size)}}>
                <h2 
                    style={
                        {
                            fontSize: getFontSize(children[0].props.size)
                        }
                    }
                >+{children.length - parseInt(max) > 100 ? "99" : children.length - parseInt(max)}</h2>
            </div>
        }
        {children.length > parseInt(max) ? children.slice(0,parseInt(max)) : children}
    </div>
  )
}

export default AvatarGroup