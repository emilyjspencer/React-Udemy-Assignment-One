import React, { Component } from 'react';
import ValidationComponent from './components/ValidationComponent/ValidationComponent';
// import CharComponent from './components/CharComponent/CharComponent';

import './App.css';

class App extends Component {
  state = {
    userInput: ''
    // user input by default is nothing
  }

  // create an input field with a change listneer which outputs the length of th entered text eblow
  // create a new coponent called ValidationComponent which receives the text length as a prop
  // Inside the Validation copmonent - either output text too short or text long enough- depending on the text length - minimum 5
  // create another component - CharComponent and style it as an inline box - display: inline-block, padding: 16px, text-align: center;, margin: 16px, border: 1px solid black
  // render a list of CharComponents where each CharComponent receives a different letter of the entered text - in the initial input field as a prop
  // When you click a CharComponent, it should be removed from the entered text

  findLengthHandler = (event) => {
    // this method takes an event as an argument - because we need to use event.target.value with inputs
    this.setState({ userInput: event.target.value });
    // use setState() to update the state from userInput being an empty string to being equal to what the user enters


  }

  //render  a list of charcomponents


  render() {
    return (
    <div className="App">
     <input 
     onChange={this.findLengthHandler } 
     value={this.state.userInput} 
     type="text" />
     <p>{this.state.userInput}</p> 
    </div>
  );
  }
}

export default App;
