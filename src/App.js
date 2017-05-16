import React, { Component } from 'react';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    // prototype method
  }

  handleAnchorClick = (event) => {
    // ES Class Fields & Static Properties
    // https://babeljs.io/docs/plugins/transform-class-properties/
    // https://github.com/tc39/proposal-class-public-fields
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click Me!</button>
        <a href="#" onClick={this.handleAnchorClick}>Click Me!</a>
      </div>
    );
  }
}

export default App;
