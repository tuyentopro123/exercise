import React,{useState,useEffect} from 'react'
import "./Calender.css"
import GetTimeString from "../utils/GetTimeString"
import GetWeekdayString from "../utils/GetWeekdayString"
import Body from "./calenderBody/Body"

const Calender = () => {

    const nowDate = new Date()
    const day = new Date(nowDate.getFullYear(), nowDate.getMonth(), 1).getDay();
    const date = GetWeekdayString(day) + ", " + GetTimeString(nowDate.getMonth() + 1) + " " + (nowDate.getDate()) + ", " + (nowDate.getFullYear())

    const [info,setInfo] = useState(null)

    // submit form
    const handleSubmit = async(e) => {
        e.preventDefault();
        await resetInfo();
        if(!e.target[1].value || !e.target[2].value) {
            alert("điền đầy đủ thông tin để tìm kiếm")
        } else {
            const newInfo = {
                day: parseInt(e.target[0].value),
                month: parseInt(e.target[1].value) - 1,
                year: parseInt(e.target[2].value),
            }
            setInfo(newInfo)
        }
    }


    const resetInfo = () => {
        setInfo(null)
    }

    // get today
    const handleGetToday = async() => {
        await resetInfo();
        const nowDate = new Date().getDate()
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const newInfo = {
            day: nowDate,
            month: currentMonth,
            year: currentYear,
        }
        setInfo(newInfo)
    }
  return (
    <div className="calender">
        <div className="calender__container">
            <div className="calender__form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Ngày:</label>
                    <input name="day" type="number" min="1" max="31"/><br/>
                    <label htmlFor="">Tháng:</label>
                    <input name="month" type="number" min="1" max="12"/><br/>
                    <label htmlFor="">Năm:</label>
                    <input name="year" type="number" min="1900"/><br/>
                    <button type="submit"> Search </button>
                </form>

            </div>

            <div className="calender__today" onClick={handleGetToday}>
                <div>Today: <span>{date}</span></div>
            </div>

            <div className="calender__content">
                <Body info={info}/>
            </div>
        </div>
    </div>
  )
}

export default Calender;