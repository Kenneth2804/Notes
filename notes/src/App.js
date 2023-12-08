import logo from './logo.svg';
import './App.css';
import { Home } from './Vistas/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Login } from './Vistas/Login';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/home' exact element={<Home></Home>}></Route>
      <Route path='/' exact element={<Login></Login>}></Route>
      </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
