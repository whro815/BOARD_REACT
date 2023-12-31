import './App.css';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import  React,{ Component } from 'react';



const customers = [{
  'id':1,
  'name' : '홍길동',
  'birthday' : '950529',
  'gender' : '남자',
  'job' : '직장인',
},
{
  'id':2,
  'name' : '홍길이',
  'birthday' : '950530',
  'gender' : '여자',
  'job' : '대학생',
}

]

class App extends React.Component{
  render() {
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
                      {customers.map( c => {
                                return (<Customer
                                            key = {c.id}
                                            id={c.id}
                                            name={c.name}
                                            birthday={c.birthday}
                                            gender={c.gender}
                                            job={c.job}/> ) } ) } 
                    </TableBody>
                  </Table>
                </Paper>
            );
      }
}

export default App;