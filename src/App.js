import React, {Component} from 'react';
import axios from 'axios';
import Loading from './Loading';


class App extends Component{
  constructor(props){
    super(props)
    //srate
    this.state={
      users:[],
      loading:false
    };
    //any time create function BIND it
    this.handleSubmit=this.handleSubmit.bind(this);

  }

  getUsers(){
    this.setState({
      loading:true
    })
    axios('https://api.randomuser.me/?results=5')
    .then(response => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading :false
    })
    );
  }

  handleSubmit(e){
    e.preventDefault();
    this.getUsers();
    console.log('More users loaded');
  }

  componentWillMount(){
    this.getUsers();
  }



  render(){
    const {loading, users}=this.state;
    return(
      <div className="App">
        <form onSubmit={this.handleSubmit}>
              <input type="submit" value="load new users" />
        </form>
        <hr />
        {!loading
         ? users.map(user =>(
           <div key={user.id.value}>
            <h3 style={{color:'red'}}>{user.name.first}</h3>
            <p>{user.email}</p>
            <hr />
           </div>))
        : <Loading message="Hey hi Lets do it" />}  
      </div>
    );
  }
}

export default App;
