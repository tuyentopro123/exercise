import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Calender from "./components/Calender/Calender"
import Avatar from "./components/Avatar/Avatar"
import Navbar from "./components/Navbar/Navbar"
import Flag from "./components/Flag/Flag"
import Navigation from "./components/Navigation/Navigation"
import GranttChart from "./components/GranttChart/GranttChart"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Calender/>}/>
          <Route path='/avatar' element={<Avatar />}/>
          <Route path='/flag' element={<Flag />}/>
          <Route path='/navigation' element={<Navigation />}/>
          <Route path='/grantt-chart' element={<GranttChart />}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
