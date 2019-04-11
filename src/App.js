import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Navbar}/>
          <Route path="/movie/:id" component={Navbar}/>
          
          <Route component={Navbar}/>
        </Switch>
      </div>
    );
  }
}

export default App;
