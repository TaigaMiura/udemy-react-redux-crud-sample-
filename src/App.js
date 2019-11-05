import React, { Component } from 'react';

class App extends Component {
  render() {
    // return <h1>Hello, world</h1>
    return (
      <>
        <label htmlFor="for">bar</label>
        <input type="text" onClick={() => { console.log('hi') }} />
      </>
    )
  }
}
export default App;
