import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'
import CustomerProfile from './components/Customer'
const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'강길동',
  'birthday':'939389',
  'gender':'male',
  'job': 'programer'
},{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'홍길동',
  'birthday':'930229',
  'gender':'male',
  'job': 'student'
},{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'최길동',
  'birthday':'919229',
  'gender':'female',
  'job': 'baeksu'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          //c = customers[0] ...
          customers.map( c => {
            return (
              <Customer
              //map 은 꼭 key 가있어야함 
              key={c.id}
                id={c.id}
                image={c.image}
                birthday={c.birthday}
                name={c.name}
                gender={c.gender}
                job = {c.job}
              />
            );
          })
        }
       </div>

    )
  }
}

export default App;
