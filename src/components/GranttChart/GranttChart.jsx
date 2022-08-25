import React,{useRef,useState,useEffect} from 'react'
import './GranttChart.css'
import Helmet from "../utils/Helmet/Helmet"

const GranttChart = () => {
    const [data,setData] = useState(
    [
        {   
            id:1,
            name:"animation",
            startInt: 12,
            start:12,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:2,
            name:"animation",
            start: 8,
            startInt:8,
            end: 14,
            endInt: 14,
            monthBegin:5,
            monthEnd:5,
            year:2020,
        },
        {   
            id:3,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:4,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:5,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:6,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:7,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:8,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:9,
            name:"animation",
            start: 2,
            startInt:2,
            end: 10,
            endInt:10,
            monthBegin:5,
            monthEnd:5,
            year:2020,
        },
        {   
            id:10,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
        {   
            id:11,
            name:"animation",
            start: 8,
            startInt:8,
            end: 17,
            endInt:17,
            monthBegin:5,
            monthEnd:6,
            year:2020,
        },
    ])
    const [test,setTest] = useState(1)

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

        let date = Math.floor(e.target.parentNode.offsetLeft / (850/30)) + 1
        let index = parseInt(e.target.parentNode.id)
        if (e.target.className === "progress-child-left") {
            e.target.parentNode.style.width = (e.target.parentNode.offsetWidth + pos1) + "px";
            e.target.parentNode.style.left = (e.target.parentNode.offsetLeft - pos1) + "px";
            setData(data.fill({
                id:index,
                start:date,
                startInt:(e.target.parentNode.offsetLeft / (850/30)) + 1,
                name:data[index - 1].name,
                end: data[index - 1].end,
                monthBegin:data[index - 1].monthBegin,
                monthEnd:data[index - 1].monthEnd,
                year:data[index - 1].year,
            },index - 1,index))
            setTest(pre => pre + 1)
        }
        if (e.target.className === "progress-child-center") {
            e.target.parentNode.style.left = (e.target.parentNode.offsetLeft - pos1) + "px";
            // let date = (e.target.parentNode.offsetLeft / (850/30)) + 1
            // let duration = e.target.parentNode.offsetWidth / (850/30) 
            // setData(data.fill({
            //     id:index,
            //     start:Math.floor(date),
            //     startInt:(e.target.parentNode.offsetLeft / (850/30)) + 1,
            //     name:data[index - 1].name,
            //     end: Math.floor(date) + Math.floor(duration),
            //     endInt: date + duration,
            //     monthBegin:data[index - 1].monthBegin,
            //     monthEnd:data[index - 1].monthEnd,
            //     year:data[index - 1].year,
            // },index - 1,index))
            // setTest(pre => pre + 1)
        }
        if (e.target.className === "progress-child-right") {
            e.target.parentNode.style.width = (e.target.parentNode.offsetWidth - pos1) + "px";
            // let duration = e.target.parentNode.offsetWidth / (850/30) 
            // setData(data.fill({
            //     id:index,
            //     start:data[index - 1].start,
            //     startInt:data[index - 1].startInt,
            //     name:data[index - 1].name,
            //     endInt:duration + data[index - 1].start,
            //     end: Math.floor(duration) + data[index - 1].start,
            //     monthBegin:data[index - 1].monthBegin,
            //     monthEnd:data[index - 1].monthEnd,
            //     year:data[index - 1].year,
            // },index - 1,index))
            // setTest(pre => pre + 1)
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
                    <div className="grantt-header title">
                        <div className="grantt-title">
                            <div className="item-Name">Name</div>
                            <div className="item-start">start</div>
                            <div className="item-end">end</div>
                            <div className="item-duration">duration</div>
                        </div>
                    </div>
                    <div className="grantt-menu">
                        {
                            data.map((item,index) => (
                                <div key={index} className={`grantt-cell ${index === 0 ? "first" : ""}`}>
                                    <div className="grantt-row">
                                        <div className="item-Name">{item.name}</div>
                                        <div className="item-start">{item.start}</div>
                                        <div className="item-end">{item.end}</div>
                                        <div className="item-duration">{(item.end - item.start)}d</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="grantt-draggble">
                        <div className="grantt-header time">
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
                                    <div className="grantt-month">June, 2020</div>
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
                                    <div key={index} className={`grantt-cell`}>
                                        <div className="grantt-content">
                                            <div className="grantt-content__box">
                                                <div 
                                                id={item.id}
                                                className="grantt-progress" 
                                                onMouseDown={(e) => mouseDown(e)}
                                                style={
                                                    {
                                                        width: `${((item.endInt - item.startInt) * 850 / 30) + 850 * (item.monthEnd - item.monthBegin)}px`,
                                                        left: `${((item.startInt - 1) * 850 / 30) + 850 * (item.monthBegin - 5)}px`
                                                    }
                                                }>
                                                    <div
                                                        className="progress-child-left"
                                                    ></div>
                                                    <div
                                                        className="progress-child-center"
                                                    ></div>
                                                    <div
                                                        className="progress-child-right"
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