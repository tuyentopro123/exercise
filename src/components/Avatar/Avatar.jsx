import React from 'react'
import "./Avatar.css"
import AvatarItem from "./Avatar/AvatarItem/AvatarItem"
import AvatarGroup from "./Avatar/AvatarGroup/AvatarGroup"
import Helmet from "../utils/Helmet/Helmet"

const Avatar = () => {
    const avatar = [
        {
            status: "approved",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"
        },
        {
            status: "declined",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"
        },
        {
            status: "Locked",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"
        },
        {
            status: "online",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg",
            loca: "bottom"
        },
        {
            status: "busy",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg",
            loca: "bottom"
        },
        {
            status: "focus",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg",
            loca: "bottom"
        },
        {
            status: "offline",
            src:"https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg",
            loca: "bottom"
        },
    ]
  return (
    <Helmet title="Avatar">
        <div className="avatar">
            <div className="avatar-container">
                <h3>Avatar</h3>
                <div className="normal">
                    <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="xxlarge"/>
                    <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="xlarge"/>
                    <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                    <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" />
                    <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="xsmall"/>
                </div>
                {
                    avatar.map((item,index) => (
                        <div key={index} className={item.status}>
                            <AvatarItem src={item.src} loca={item.loca ? item.loca: "top"} status={item.status} size="xlarge"/>
                            <AvatarItem src={item.src} loca={item.loca ? item.loca: "top"} status={item.status} size="large"/>
                            <AvatarItem src={item.src} loca={item.loca ? item.loca: "top"} status={item.status}/>
                            <AvatarItem src={item.src} loca={item.loca ? item.loca: "top"} status={item.status} size="small"/>
                        </div>
                    ))
                }
            </div>
            <div className="avatar-box">
                <div className="avatar-entity">
                    <h3>Entity avatar</h3>
                    <div className="small">
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1658243131/Avatar/myv9pyaygzuqz3hbrl2p.png" appearance="square"  size="xxlarge"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1658243131/Avatar/myv9pyaygzuqz3hbrl2p.png" appearance="square"  size="xlarge"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1658243131/Avatar/myv9pyaygzuqz3hbrl2p.png" appearance="square"  size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1658243131/Avatar/myv9pyaygzuqz3hbrl2p.png" appearance="square" />
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1658243131/Avatar/myv9pyaygzuqz3hbrl2p.png" appearance="square"  size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1658243131/Avatar/myv9pyaygzuqz3hbrl2p.png" appearance="square"  size="xsmall"/>
                    </div>
                </div>

                <div className="avatar-group">
                    <h3>Avatar group</h3>
                    <AvatarGroup max="4">
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="small"/>
                    </AvatarGroup>

                    <AvatarGroup max="4">
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg"/>
                    </AvatarGroup>

                    <AvatarGroup max="4">
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                        <AvatarItem src="https://res.cloudinary.com/tealive/image/upload/v1651030638/Avatar/c3fzqvuhxkjdyih2i9do.jpg" size="large"/>
                    </AvatarGroup>
                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default Avatar