import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{
  renderHeader = () => {
    return (<h1> Hello, World!</h1>);
  }

  render(){
    return(
      <div className="App">
        {this.renderHeader()}
      </div>
    );
  }
}

export default hot(module)(App);