import React, {Component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';

class App extends Component {

  state = {

    users: [
      {
        id: 1,
        name: "Birkan ÖZCAN",
        salary: "2000",
        department: "Bilişim"
      },

      {
        id: 2,
        name: "Funda ÖZCAN",
        salary: "3000",
        department: "Bilişim"
      },

      {
        id: 3,
        name: "Eylül ÖZCAN",
        salary: "4000",
        department: "Bilişim"
      }

    ]
  }

render() {
  return (
    <div className="container"> 
      <Navbar title = "User App"/>
      <hr/>
    <Users users = {this.state.users}/>

      </div>
  );
}
}

export default App;