import './App.css';
// import Customer from './components/Customer';
// import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import  React,{ Component, useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"
// react-router-dom version 6 ����
// Switch ���� => Routes �� ���
import axios from "axios";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoignPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App(){

  // const [customers , setCustomers] = useState([]);

  // useEffect( async () =>{
  //   await axios.get('/api')
  //   .then((response)=>{
  //     console.log(response.data);
  //     setCustomers(response.data);
  //   })
  // },[])

  return (
          <Router>
              <div>
                  <Routes>
                    <Route exact path='/' Component={LandingPage} element={ <LandingPage/> } />
                    <Route path='/login' Component={LoginPage} element={ <LoginPage/> } />
                    <Route path='/register' Component={RegisterPage} element={ <RegisterPage/> } />
                  </Routes>
              </div>
          </Router>
  )

}

export default App;