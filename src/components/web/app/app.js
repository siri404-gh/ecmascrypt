import React, { Component } from 'react';
import Header from '../../../lib/header/header';
import Loader from '../../../lib/loader/loader';
import Content from '../content/content';
class App extends Component {
  render() {
    return (
      <div>
        <Header title='title' />
        <Content />
        <Loader />
      </div>
    );
  }
};

export default App;
