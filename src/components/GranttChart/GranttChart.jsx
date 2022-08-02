import React,{useRef} from 'react'
import './GranttChart.css'
import Helmet from "../utils/Helmet/Helmet"
import Progress from "./Progress/Progress"

const GranttChart = () => {
    const data = [
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "17-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "13-5-2020",
            end: "18-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "8-5-2020",
            end: "20-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "16-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "12-5-2020",
            end: "20-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "1-5-2020",
            end: "10-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "1-5-2020",
            end: "10-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "1-5-2020",
            end: "10-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "1-5-2020",
            end: "10-5-2020",
            duration:5
        },
        {
            name:"animation",
            start: "1-5-2020",
            end: "10-5-2020",
            duration:5
        },
    ]

    const createDays = () => {
        let arr = [];
        for(let i = 0; i < 30; i++) {
            arr.push({
                day: i + 1,
            });
        }
        return arr;
    }

    var pos3,pos1;

    const mouseDown = (e) => {
        e.preventDefault();

        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };
    
    const elementDrag = (e) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;

        if (e.target.className === "progress-child-left") {
            e.target.parentNode.style.left = (e.target.parentNode.offsetLeft - pos1) + "px";
        }
        if (e.target.className === "progress-child-right") {
            e.target.parentNode.style.width = (e.target.parentNode.offsetWidth - pos1) + "px";
        }
      }

      

      const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      }

  return (
    <Helmet title="GranttChart">
        <div className="grantt-chart">
            <div className="grantt-container">
                <div className="grantt-header">
                    <div className="grantt-title">
                        <div className="item-Name">Name</div>
                        <div className="item-start">start</div>
                        <div className="item-end">end</div>
                        <div className="item-duration">duration</div>
                    </div>
                </div>
                {
                    data.map((item,index) => (
                        <div key={index} className="grantt-cell">
                            <div className="grantt-row">
                                <div className="item-Name">{item.name}</div>
                                <div className="item-start">{item.start}</div>
                                <div className="item-end">{item.end}</div>
                                <div className="item-duration">{item.duration}d</div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="grantt-draggble">
                <div className="grantt-header">
                    <div className="grantt-time">
                        <div className="grantt-time__box">
                            <div className="grantt-month">May, 2020</div>
                            <div className="grantt-date">
                                <ul>
                                    {
                                        createDays().map((item,index) => (
                                            <li key={index}>
                                                <span>{item.day}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        
                        <div className="grantt-time__box">
                            <div className="grantt-month">May, 2020</div>
                            <div className="grantt-date">
                                <ul>
                                    {
                                        createDays().map((item,index) => (
                                            <li key={index}>
                                                <span>{item.day}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grantt-box">
                    {
                        data.map((item,index) => (
                            <div key={index} className="grantt-cell">
                                <div className="grantt-content">
                                    <div className="grantt-content__box">
                                        <div 
                                        className="grantt-progress" 
                                        onMouseDown={(e) => mouseDown(e)}
                                        style={
                                            {
                                                width: `${item.duration * 850 / 30}px`,
                                                minWidth: `${item.duration * 850 / 30}px`,
                                                left: `${(parseInt(item.start.slice(0,2)) - 1) * 850 / 30}px`
                                            }
                                        }>
                                            <div
                                                className={`progress-child-left`}
                                            ></div>
                                            <div
                                                className={`progress-child-right`}
                                            ></div>       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default GranttChart