import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class App extends React.Component {
  render () {
    return <h1>
      Hello World! {this.props.name}
    </h1>;
  }
}

export default App;
