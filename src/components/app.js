import React, { Component } from 'react';

// const App = () => {
//     return (
//       <div>React simple starter!!</div>
//     );
// }
// export const X =2;
// export default {App, X};

export default class App extends Component {
  componentWillMount(){
    this.setState({a: 1})
  }
  render(){
    console.log('state', this.state)
    return (
      <div>
        <button onClick={() => this.setState({a: 2})}>click</button>
        Hi HelLo...
      </div>
    )
  }
}