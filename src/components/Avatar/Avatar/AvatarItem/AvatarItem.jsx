import React from 'react'

const AvatarItem = ({size,status,loca,appearance,src}) => {
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

    const getSizeSvg = (e) => {
        var length = ""
        switch(e) {
            case "xxlarge":
                length = "21"
                break;
            case "xlarge":
                length = "18"
                break;
            case "large":
                length = "15"
                break;  
            case "small":
                length = "12"
                break;                  
            default:
                length = "14"
            }
        return length
    }

    const getSvgImg = (e) => {
        var element = undefined
        switch(e) {
            case "approved":
                element =  <svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <rect x="1" y="1" width="16" height="16" rx="8" fill="#00875A"/>
                               <path d="M6.32092 8.17409C5.86547 7.71864 5.12704 7.71864 4.67159 8.17409C4.21614 8.62954 4.21614 9.36796 4.67159 9.82341L7.00409 12.1559C7.45954 12.6114 8.19797 12.6114 8.65342 12.1559L13.3184 7.49091C13.7739 7.03546 13.7739 6.29704 13.3184 5.84159C12.863 5.38614 12.1245 5.38614 11.6691 5.84159L7.82875 9.68192L6.32092 8.17409Z" fill="white"/>
                               <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                           </svg>
                break;
            case "declined":
                element =   <svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="16" height="16" rx="8" fill="#DE350B"/>
                                <path d="M10.5587 9.01546L12.1816 7.38654C12.6079 6.95865 12.6059 6.26697 12.177 5.84164C11.7481 5.41631 11.0548 5.41839 10.6284 5.84628L9.0134 7.46726L7.37087 5.8216C6.94417 5.39408 6.25087 5.39262 5.82235 5.81832C5.39383 6.24403 5.39236 6.9357 5.81907 7.36322L7.46952 9.01682L5.85481 10.6375C5.42849 11.0654 5.43057 11.757 5.85946 12.1824C6.28836 12.6077 6.98165 12.6056 7.40798 12.1777L9.01477 10.565L10.5911 12.1444C11.0178 12.5719 11.7111 12.5733 12.1396 12.1476C12.5682 11.7219 12.5696 11.0303 12.1429 10.6027L10.5587 9.01546Z" fill="white"/>
                                <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                            </svg>
                break;
            case "Locked":
                element = <svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="16" height="16" rx="8" fill="#DFE1E6"/>
                            <path d="M9.01847 4.33002H8.97107C7.67468 4.33002 6.62477 5.36372 6.62477 6.64009V7.83013H7.80977V6.65176C7.80977 6.01357 8.33472 5.49672 8.98292 5.49672H9.00662C9.65481 5.49672 10.1798 6.01357 10.1798 6.65176V7.83013H11.3648V6.64009C11.3648 5.36372 10.3149 4.33002 9.01847 4.33002ZM6.62477 7.83013H7.80977V8.99683H6.62477V7.83013ZM10.1798 7.83013H11.3648V8.99683H10.1798V7.83013ZM10.18 8.99683H7.81H6.625C5.97088 8.99683 5.44 9.51951 5.44 10.1635V11.9136C5.44 12.8801 6.22806 13.6636 7.19753 13.6636H10.7925C11.7631 13.6636 12.55 12.8869 12.55 11.9136V10.1635C12.55 9.51951 12.0191 8.99683 11.365 8.99683H10.18Z" fill="#42526E"/>
                            <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                            </svg> 
                break;  
            case "online":
                element =<svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="16" height="16" rx="8" fill="#36B37E"/>
                        <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                        </svg>
                break;  
            case "busy":
                element =<svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="16" height="16" rx="8" fill="#FF5630"/>
                            <path d="M7.77422 5.32266L12.6773 10.2258C13.0276 10.576 13.0276 11.1013 12.6773 11.4516L11.4516 12.6773C11.1013 13.0276 10.576 13.0276 10.2258 12.6773L5.32266 7.77422C4.97244 7.424 4.97244 6.89866 5.32266 6.54844L6.54844 5.32266C6.89866 4.97244 7.424 4.97244 7.77422 5.32266Z" fill="white"/>
                            <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                            </svg>
                break; 
            case "focus":
                element = <svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="16" height="16" rx="8" fill="white"/>
                            <path d="M9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16ZM9 13.6667C11.5773 13.6667 13.6667 11.5773 13.6667 9C13.6667 6.42267 11.5773 4.33333 9 4.33333C6.42267 4.33333 4.33333 6.42267 4.33333 9C4.33333 11.5773 6.42267 13.6667 9 13.6667ZM9 11.3333C7.71134 11.3333 6.66667 10.2887 6.66667 9C6.66667 7.71134 7.71134 6.66667 9 6.66667C10.2887 6.66667 11.3333 7.71134 11.3333 9C11.3333 10.2887 10.2887 11.3333 9 11.3333Z" fill="#6554C0"/>
                            <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                            </svg>
                
                break;  
            case "offline":
                element = <svg width={getSizeSvg(size)} height={getSizeSvg(size)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="16" height="16" rx="8" fill="#6B778C"/>
                            <path d="M9 12.5C10.933 12.5 12.5 10.933 12.5 9C12.5 7.067 10.933 5.5 9 5.5C7.067 5.5 5.5 7.067 5.5 9C5.5 10.933 7.067 12.5 9 12.5Z" fill="#DFE1E6"/>
                            <rect x="1" y="1" width="16" height="16" rx="8" stroke="white" strokeWidth="2"/>
                            </svg> 
                break;                 
            default:
                element = null
            }
        return element
    }
  return (
    <div className="avatar-item" style={{position: "relative"}}>
        <img 
            src={src ? src : "https://res.cloudinary.com/tealive/image/upload/v1653141302/emoji/ouwioaxukerwe8nj5ymy.png"} 
            alt="" 
            style={
                appearance === "square" ? 
                {
                    width: getSize(size), 
                    height: getSize(size),
                    borderRadius: "4px",
                    marginRight: "20px"
                }
                :
                {
                    width: getSize(size), 
                    height: getSize(size),
                    // objectFit:"cover",
                    borderRadius: "50%",
                    marginRight: "20px"
                }
            }
        />
        <div 
            className="status"
            style={
                loca === "bottom" ?
                {
                    position: "absolute",
                    bottom: "-15px",
                    right: size === "small" ? "33%" : "25%",
                    border:"10px"
                }
                :
                {
                    position: "absolute",
                    top: "0",
                    right: size === "small" ? "33%" : "25%",
                    border:"10px"
                }
            }
        >   
            {getSvgImg(status)}
        </div>
    </div>
  )
}

export default AvatarItem