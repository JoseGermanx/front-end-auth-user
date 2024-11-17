// crear rutas de la app con react-router-dom: home, register, login, forgot-password, reset-password and thanks

import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import Login from "./components/Login";
import ResetPass from "./components/ResetPass";
import Thanks from "./components/Thanks";
import ChangePass from "./components/ChangePass";
import './index.css';
import Home from "./components/Home";

const App = () => {

  return (

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/reset-password' element={<ResetPass/>} />
      <Route path="/change-password" element={<ChangePass />} />
      <Route path='/thanks' element={<Thanks />} />
    </Routes>
  </BrowserRouter>
  
    );

  };

export default App;