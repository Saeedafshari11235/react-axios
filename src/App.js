import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://iotserver-arha83.herokuapp.com/api/customers/'
})

class App extends Component {

  state = {
    courses:[]
  }

  constructor(){
    super();
    api.get('/').then(res =>{
      this.setState({courses: res.data})
    })
  }


  render(){return (
    <div className="App">
      <header className="App-header">
        <table>
        <tr>{this.state.courses.map(course=><td key={course.id}>{course.pk}</td>)}</tr>
        <tr>{this.state.courses.map(course=><td key={course.id}>{course.title}</td>)}</tr>
        <tr>{this.state.courses.map(course=><td key={course.id}>{course.gateway}</td>)}</tr>
        </table>
        
        
      </header>
    </div>
  );}
}

export default App;
