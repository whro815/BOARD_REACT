import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import  React,{ Component, useEffect, useState } from 'react';
import axios from "axios";

function App(){

  const [customers , setCustomers] = useState([]);

  useEffect( async () =>{
    await axios.get('/api')
    .then((response)=>{
      console.log(response.data);
      setCustomers(response.data);
    })
  },[])

  return (
            <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>생년월일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>직업</TableCell>
                      </TableRow>                                                             
                    </TableHead>
                    <TableBody>
                    {customers.map( c =>
                      <Customer
                                key = {c.id}
                                id={c.id}
                                name={c.name}
                                birthday={c.birthday}
                                gender={c.gender}
                                job={c.job}/>
                      
                     )}
                    </TableBody>
                  </Table>
                </Paper>
  )

}

export default App;