// import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home"
import Signup from './Components/Signup';
import Login from"./Components/Login";

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword';
function App() {
  return (
   <BrowserRouter>
   <div>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/signin' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/forgot' element={<ForgotPassword/>}/>
   </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
