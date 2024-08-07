import Food from './Food';
import Groceries from './Groceries';
import Home from './Home';
import Login from './Login';
import Medicine from './Medicine';
import Register from './Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/food" element ={<Food/>} />
          <Route path="/groceries" element ={<Groceries/>} />
          <Route path="/medicines" element ={<Medicine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App






