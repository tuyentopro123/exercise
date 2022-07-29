import React,{useState,useEffect} from 'react'
import "./Body.css"
import getTimeString from "../../utils/GetTimeString"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Body = ({info}) => {
    const weeks = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    
    const nowDate = new Date().getDate()
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // Set năm, tháng hiện tại
    const [month,setMonth] = useState(new Date().getMonth())
    const [year,setYear] = useState(new Date().getFullYear())

    // Lấy số ngày của 1 tháng
    function getDaysInMonth(Year,Month) {
        return new Date(Year, Month + 1, 0).getDate();
    }

    // Ngày bắt đầu của tháng 
    const getStartDayInMonth = () => {
        return new Date(year, month, 1).getDay();
    }

    // Số ngày tháng trước
    const createPreDays = () => {
        let arr = [];
        const num = getDaysInMonth(year,month - 1)
        for(let i = num - getStartDayInMonth() ; i < num; i++) {
            arr.push(i + 1);
        }
        return arr;
    }

    // Số ngày tháng hiện tại
    const createDays = () => {
        let arr = [];
        const num = getDaysInMonth(year,month)
        const sat = 7 - (getStartDayInMonth() + 1);
        const sun = 8 - (getStartDayInMonth() + 1);
        for(let i = 0; i < num; i++) {
            arr.push({
                day: i + 1,
                special: (i + 1 - sat - 1) % 7 === 0 || (i + 1 - sun - 1) % 7 === 0   ? true : false,
                today: year === currentYear && month === currentMonth && (i+1) === nowDate ? true : false,
                active:year === info?.year && month === info?.month && (i+1) === info?.day ? true : false
            });
        }
        return arr;
    }

    // Số ngày tháng sau
    const createNextDays = () => {
        let arr = [];
        const preNum = getStartDayInMonth()
        const currentNum = getDaysInMonth(year,month)
        for(let i = 0; i < 42 - preNum - currentNum; i++) {
            arr.push(i + 1);
        }
        return arr;
    }

    // onClick next,pre month
    const handlePreMonth = () => {
        if (month == 0) {
            setMonth(11)
            setYear(pre => pre - 1)
        } else {
            setMonth(pre => pre - 1)
        }
    
    }
    
    const handleNextMonth = () => {
        if (month == 11) {
            setMonth(0)
            setYear(pre => pre + 1)
        } else {
            setMonth(pre => pre + 1)
        }
    }

    useEffect(() => {
        if(info) {
            setMonth(info.month);
            setYear(info.year);
        }
    },[info?.month,info?.year])

    console.log(info)
    
  return (
      <div className="body">
{        console.log("gaga")}
            <div className="header">
            <div className="date">
                <h1>{`${getTimeString(month + 1)} ${year}`}</h1>
            </div>

            <div className="icon">
                <div className="button" onClick={handlePreMonth}>
                    <ArrowCircleLeftIcon color="primary" sx={{fontSize:35}}/>
                </div>
                
                <div className="button" onClick={handleNextMonth}>
                    <ArrowCircleRightIcon color="primary" sx={{fontSize:35}}/>
                </div>
            </div>
        </div>
        
        <div className="content">
            <div className="weekdays">
                {weeks.map((item,index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>

            <div className="days">
                {createPreDays().map((item,index) => (
                    <div key={index} className="pre-days">{item}</div>
                ))}
                {createDays().map((item,index) => (
                    <div 
                        key={index} 
                        className={`current-days 
                                    ${item.special ? "highlight" : ""} 
                                    ${item.today ? "today" : ""}
                                    ${item.active ? "active" : ""}`
                                }
                    >
                        {item.day}
                    </div>
                ))}
                {createNextDays().map((item,index) => (
                    <div key={index} className="next-days">{item}</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Body