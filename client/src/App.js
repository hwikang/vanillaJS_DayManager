import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles= theme =>({
  root: {
    width: '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX :"auto"
  },
  table:{
    minWidth:1080
  }
})

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
    const {classes} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>            
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
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
        </TableBody>
          </Table>
        
       </Paper>

    )
  }
}

export default withStyles(styles)(App);