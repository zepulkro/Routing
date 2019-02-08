import React, { Component } from 'react';
import Router from './componentes/Router';

class App extends Component {
  render() {
    return (
      <div className="contenedor">
        <React.Fragment>
          <Router />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
