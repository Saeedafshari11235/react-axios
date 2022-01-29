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
        <tr>
        <th>pk</th>
        <th>title</th>
        <th>gateway</th>
        </tr>
        {this.state.courses.map((course) => (
          <tr>
          <td>{course.pk}</td>
          <td>{course.title}</td>
          <td>{course.gateways.join(",")}</td>
          </tr>
        ))}
</table>
        
        
      </header>
    </div>
  );}
}

export default App;
