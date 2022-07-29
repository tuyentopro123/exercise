import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Calender from "./components/Calender/Calender"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Calender/>}/>
          {/* <Route path='/login' element={user ? <Navigate to='/' /> : <Login />}/>
          <Route path='/register' element={<Register />}/> */}
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
