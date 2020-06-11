import React from "react";
import Button from "./Button.jsx"; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  } 
  
  handleIncrement = (state) => {
    this.setState(state => {
        return {
            count : state.count + 1
        };
    })
  };

  handleDecrement = (state) => {
    this.setState(state => {
        return {
            count : state.count - 1
        };
    })
  }

  handleReset = (state) => {
    this.setState(state => {
        return {
            count : 0
        };
    })
  }


  render() {
    return (
      <>
        <h2>Count: {this.state.count} </h2>
        <Button handleClick={this.handleIncrement}>
          Increment
        </Button>

        <Button handleClick={this.handleDecrement}>
          Decrement
        </Button>

        <Button handleClick={this.handleReset}>
          Reset
        </Button>
      </>
    );
  }
}

export default App;
