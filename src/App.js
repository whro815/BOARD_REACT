import './App.css';
import React from 'react';
import Customer from './components/Customer';

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

function App() {
  return (
    <div>
      {
        customers.map( c => {
            return (
                <Customer
                key = {c.id}
                id={c.id}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}/>
            )
        })
      }
    </div>
  )
}

export default App;