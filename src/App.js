import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';


import axios from 'axios';


class App extends Component{
  constructor(props){
    super(props)
    //srate
    this.state={
      users:[]
    }
  }

  componentWillMount(){
    axios('https://api.randomuser.me/')
    .then(response => this.setState({
      users: response.data.results
    })
    );
  }
  render(){
    return(
      <div className="App">
        {this.state.users.map(user =>
           <div>
           {user.cell}
           </div>)}  
      </div>
    );
  }
}

export default App;
