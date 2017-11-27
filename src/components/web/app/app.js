import React, { Component } from 'react';
import Header from '../../../lib/header/header';
import Loader from '../../../lib/loader/loader';
import Content from '../content/content';
class App extends Component {
  render() {
    return (
      <div>
        <Header title='Title' />
        <Content />
        <Loader />
      </div>
    );
  }
};

if (process.env.NODE_ENV === 'DEVELOPMENT') {

  {
    let createClass = React.createClass;
    Object.defineProperty(React, 'createClass', {
      set: (nextCreateClass) => {
        createClass = nextCreateClass;
      }
    });
  }

  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

export default App;
