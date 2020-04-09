import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: "Sarang"
  }

  usernameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <title className="App-header">
          <UserInput username={this.state.username} changed={this.usernameHandler} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
        </title>
      </div>
    );
  }
}

export default App;