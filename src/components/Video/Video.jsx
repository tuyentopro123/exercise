import React,{useEffect,useRef} from 'react'
import "./Video.css"
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import {grey} from '@mui/material/colors';
import Helmet from "../utils/Helmet/Helmet"


const Video = () => {
    const container = useRef(null)
    const duration = useRef(null)
    const process = useRef(null)
    const video = useRef(null)
    const video2 = useRef(null)


    const handleLoadedData = (e) => {
        document.getElementById('total').innerText = CalcTime(Math.floor(e.target.duration))
    }

    const handlePreview = (e) => {
        console.log(e.target.className)
        let seekTime = null
        if(e.target.className === "video-duration") {
            const width = (e.clientX - e.target.offsetLeft - container.current.offsetLeft)
            process.current.style.width = width + "px";
            seekTime = (width / duration.current.offsetWidth) * video.current.duration;
            video.current.currentTime = seekTime;
        } else {
            if(e.target.className === "video-process") {
                const widthParent = (e.clientX - e.target.parentNode.offsetLeft - container.current.offsetLeft)
                process.current.style.width = widthParent + "px";
                seekTime = (widthParent / duration.current.offsetWidth) * video.current.duration;
                video.current.currentTime = seekTime;
            } else {
                return;
            }
        }
    }

    // Get time hover progress
    const handlePreviewTime = (e) => {
        const preview = document.getElementById('preview')
        let seekTime = null
        if(e.target.className === "video-duration") {
            const width = (e.clientX - e.target.offsetLeft - container.current.offsetLeft)
            seekTime = (width / duration.current.offsetWidth) * video.current.duration;
            preview.parentNode.style.left = width + "px"
            preview.innerText = CalcTime(Math.floor(seekTime))
            video2.current.currentTime = seekTime
        } else {
            if(e.target.className === "video-process") {
                const widthParent = (e.clientX - e.target.parentNode.offsetLeft - container.current.offsetLeft)
                preview.parentNode.style.left = widthParent + "px"
                seekTime = (widthParent / duration.current.offsetWidth) * video.current.duration;
                preview.innerText = CalcTime(Math.floor(seekTime))
                video2.current.currentTime = seekTime
            } 
        }
        document.onmousemove = hoverDragElement;
    }

    const hoverDragElement = (e) => {
        const preview = document.getElementById('preview')
        let seekTime = null
        if(e.target.className === "video-duration") {
            const width = (e.clientX - e.target.offsetLeft - container.current.offsetLeft)
            preview.parentNode.style.left = width + "px"
            seekTime = (width / duration.current.offsetWidth) * video.current.duration;
            preview.innerText = CalcTime(Math.floor(seekTime))
            video2.current.currentTime = seekTime
        } else {
            if(e.target.className === "video-process") {
                const widthParent = (e.clientX - e.target.parentNode.offsetLeft - container.current.offsetLeft)
                preview.parentNode.style.left = widthParent + "px"
                seekTime = (widthParent / duration.current.offsetWidth) * video.current.duration;
                preview.innerText = CalcTime(Math.floor(seekTime))
                video2.current.currentTime = seekTime
            }
        }
    }

    // Draggle process
    var pos3,pos1,lastWidth;
    const handleHold = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        lastWidth = process.current.offsetWidth;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    
    const elementDrag = (e) => {
        e.preventDefault();
        var seekTime = null
        pos1 = e.clientX - pos3;
        process.current.style.width = (lastWidth + pos1) + "px";
        seekTime = ((lastWidth + pos1) / duration.current.offsetWidth) * video.current.duration;
        video.current.currentTime = seekTime;
        video2.current.currentTime = seekTime
    }

    const closeDragElement = () => {
        lastWidth = process.current.offsetWidth;
        document.onmouseup = null;
        document.onmousemove = null;
    }

    // Pause,play video
    const handlePause = () => {
        video.current.pause()
        document.getElementById("pause").classList.toggle("active")
    }
    
    const handlePlay = () => {
        video.current.play()
        document.getElementById("pause").classList.toggle("active")
    }

    const handleDouble = () => {
        if(video.current.paused) {
            video.current.play()
            document.getElementById("pause").classList.toggle("active")
        } else {
            video.current.pause()
            document.getElementById("pause").classList.toggle("active")
        }
    }

    const handleUpdateTime = () => {
        var distance = (video.current.currentTime / video.current.duration) * duration.current.offsetWidth
        process.current.style.width = distance + 'px'
        document.getElementById('load').innerText = CalcTime(Math.floor(video.current.currentTime))
    }

    const handleUpdateTimeTwo = () => {
        let player =  video2.current
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = player.videoWidth;
        canvas.height = player.videoHeight;
        ctx.drawImage(player, 0, 0);
        document.getElementById("img").src = canvas.toDataURL();
    }

    // change Volumn
    const handleChangeVolumn = (e) => {
        video.current.volume = parseInt(e.target.value) / 100
        if(video.current.volume === 0) {
            document.getElementById("sound").classList.add("active")
        } else {
            document.getElementById("sound").classList.remove("active")
        }
    }

    const handleMute = (e) => {
        video.current.muted = true
        document.getElementById("range").value = 0
        document.getElementById("sound").classList.add("active")
    }

    const handleVolumnUp = (e) => {
        video.current.muted = false
        document.getElementById("range").value = video.current.volume * 100
        document.getElementById("sound").classList.remove("active")
    }

    // Zoom in.zoom out video
    const handleZoomIn = (e) => {
        document.getElementById("zoom").classList.remove("active")
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    const handleZoomOut = (e) => {
        document.getElementById("zoom").classList.add("active")
        if (container.current.requestFullscreen) {
            container.current.requestFullscreen();
          } else if (container.current.webkitRequestFullscreen) { /* Safari */
            container.current.webkitRequestFullscreen();
            container.current.controls = false;
          } else if (container.current.msRequestFullscreen) { /* IE11 */
            container.current.msRequestFullscreen();
          }
    }

    // time calculation
    const CalcTime = (time) => {
        var m = Math.floor(time / 60);
        var s = Math.floor(time % 60);
    
        var mDisplay = m > 0 ? (m>=10 ? m : "0" + m) : "00";
        var sDisplay = s > 0 ? (s>=10 ? s : "0" + s) : "00";
        return  mDisplay + ":" + sDisplay; 
    }

    useEffect(() => {
        const videoCurrent = document.getElementById('video');
        const videoWorks = !!document.createElement('video').canPlayType;
        if (videoWorks) {
            videoCurrent.controls = false;
        }
    },[])

  return (
    <Helmet title="Video">
        <div className="video-controls hidden" id="video-controls">
            <div className="video-container" ref={container}>
                <video 
                        id='video'
                        ref={video}
                        controls={true}
                        preload="metadata"
                        loop="loop"
                        crossOrigin='crossorigin'
                        onLoadedMetadata={handleLoadedData}
                        onClick={handleDouble}
                        playsInline={true}
                        onTimeUpdate={handleUpdateTime}
                    >
                    <source src="https://res.cloudinary.com/tealive/video/upload/v1659498892/Video/n527oglmmrc6pws0dtkc.mp4" type="video/mp4"/>
                    {/* <source src="https://res.cloudinary.com/tealive/video/upload/v1657508411/lol_template/z0flto5ulcmdvau9tofq.webm" type="video/ogg"/> */}
                </video>
                <video 
                        id='video2'
                        ref={video2}
                        preload="metadata"
                        loop="loop"
                        crossOrigin='crossorigin'
                        muted="muted"
                        playsInline={true}
                        onTimeUpdate={handleUpdateTimeTwo}
                    >
                    <source src="https://res.cloudinary.com/tealive/video/upload/v1659498892/Video/n527oglmmrc6pws0dtkc.mp4" type="video/mp4"/>
                </video>
                <div className="video-panel">
                    {/* progress duration */}
                    <div className="video-draggble">
                        <div className="video-duration" ref={duration} onMouseDown={handlePreview} onMouseOver={handlePreviewTime}>
                                <div className="video-preview">
                                    <img id="img" src="" alt="" />
                                    <span id="preview">00:00</span>
                                </div>
                            <div className="video-process" ref={process}>
                                <div className="video-process__hold" onMouseDown={handleHold}></div> 
                            </div>
                        </div>
                    </div>

                    {/* panel */}
                    <div className="video-utilities">
                        <div className="utilities-box">
                            <div id="pause" className="utilities-pause" >
                                <div className="pause" onClick={handlePause}>
                                    <PauseIcon sx={{fontSize:30, color:grey[100]}}/>
                                </div>

                                <div className="play" onClick={handlePlay}>
                                    <PlayArrowIcon sx={{fontSize:30, color:grey[100]}}/>
                                </div>
                            </div>

                            <div id="sound" className="utilities-volumn">
                                <div className="mute" onClick={handleVolumnUp}>
                                    <VolumeOffIcon sx={{fontSize:30, color:grey[100]}}/>
                                </div>

                                <div className="volumn-up" onClick={handleMute}>
                                    <VolumeUpIcon sx={{fontSize:30, color:grey[100]}}/>
                                </div>
                                <input id="range" type="range" onChange={(e) => handleChangeVolumn(e)}/>
                            </div>

                            <div className="utilities-duration">
                                <div>
                                    <span id="load" className="utilities-load">00:00</span>
                                    /
                                    <span id="total" className="utilities-total">00:00</span>
                                </div>
                            </div>
                        </div>

                        <div id="zoom" className="utilities-zoom">
                            <div className="zoom-out" onClick={handleZoomOut}>
                                <ZoomOutMapIcon sx={{fontSize:30, color:grey[100]}}/>
                            </div>
                            <div className="zoom-in" onClick={handleZoomIn}>
                                <ZoomInMapIcon sx={{fontSize:30, color:grey[100]}}/>
                            </div>

                        </div>
                    </div>
                </div>
                <canvas id="canvas"></canvas>
            </div>
        </div>
    </Helmet>
  )
}

export default Video;