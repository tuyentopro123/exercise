import React,{useEffect,useState} from 'react'
import "./Carousel.css"
import Helmet from "../utils/Helmet/Helmet"

const Carousel = () => {
    // Fetch data
    const baseUrl = "https://jsonplaceholder.typicode.com/photos"
    const [currPic,setCurrPic]  = useState(1)
    const [data,setData]  = useState([])
    const fetchData = async(url) => {
        let data = await fetch(url)
        .then((res) => res.json())
        .then((data) => {setData(data)})
        .catch(err => console.error(err))
    }
    useEffect(() => {
        fetchData(baseUrl)
    },[])

    // handel next,pre
    const handleNext = () => {
        if(currPic === data.slice(0,10).length - 1) {
            document.getElementById(`1`).classList.add("carousel-item-next")    
            document.getElementById(`${data.slice(0,10).length}`).classList.add("active")    
        } 
        if(currPic === data.slice(0,10).length) {
            setCurrPic(1)
        } else {
            setCurrPic(pre => pre + 1)
        }  
    }

    const handlePrev = () => {
        if(currPic === 1) {
            setCurrPic(data.slice(0,10).length)
        } else {
            setCurrPic(pre => pre - 1)
        }
    }


    // handle drag,drop
    var pos1,pos3,currentSlider
    const handleMouseDown = (e) => {
        e.preventDefault()
        pos1 = e.clientX
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
    }
    
    const elementDrag = (e) => {
        e.preventDefault()
        pos3 = e.clientX - pos1
        currentSlider = e.target.parentNode
    }

    const closeDragElement = (e) => {
        document.onmouseup = null;
        document.onmousemove = null;
        console.log(pos3)
        console.log(currentSlider)
        if(pos3 < -100) {
            handleNext()
        } else {
        }
        if(pos3 > 100) {
            handlePrev()
        }
    }

    const positiveNumbers = (e) => {
        return e > 0 || e === 0 ? e : (data.slice(0,10).length - 1)
    }
  return (
    <Helmet title="Carousel">
        <div className="carousel">
            <div className="carousel-container">
                <div id="carousel-controls" className="carousel-slide" data-mdb-ride="carousel">
                    <div className="carousel-inner">
                        {data.slice(0,10).map((item, index) => (
                            <div 
                            id={item.id} 
                            key={index} 
                            onMouseDown={handleMouseDown} 
                            className={`carousel-item ${index === currPic - 1 ? 'active' : ''} ${index === (currPic === 10 ? 0 : currPic) ? 'carousel-item-next' : ''} ${index === positiveNumbers(currPic - 2) ? 'carousel-item-prev' : ''}`}
                            >
                                <img src={item.thumbnailUrl} className="d-block w-100" alt={item.title}/>
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePrev} className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button onClick={handleNext} className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </Helmet>
  )
}

export default Carousel