import logo from './logo.svg';
import './App.css';

import Actual_display from './Api_fetch';
import Login from './logins';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Transaction from './Transaction';
import Admin from './admin';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/Accnumber/:acc/:key' element={<Actual_display />}/>
        <Route path='/Trans/:acc/:key' element={<Transaction />}/>
        <Route path='/admin/' element={<Admin />} />

      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
