import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cookies: 0};

    // This binding is necessary to make `this` work in the callback
    this.handleBuy = this.handleBuy.bind(this);
    this.handleEat = this.handleEat.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  handleBuy() {
    this.setState({cookies: this.state.cookies +1});
  }

  handleEat() {
    if (this.state.cookies > 0) {
      this.setState({cookies: this.state.cookies -1});
    }
  }

  onKeyUp() {
      console.log('hello');
    
  }
    // if(event.key = 'ArrowUp') {
    //   this.setState({cookies: this.state.cookies +1});
    // } else if (event.key = 'ArrowDown') {
    //   if (this.state.cookies > 0) {
    //     this.setState({cookies: this.state.cookies -1});
    //   }
    // }

  

  render() {
    return (
      <div>
        <button onClick={this.handleBuy} >  Buy one </button>
        <p>{this.state.cookies}</p>
        <button onClick={this.handleEat} onKeyPress={this.onKeyUp}>  Eat one </button>
      </div>
    );
  }
}


export default App;
