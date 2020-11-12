import React , { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './header/Navbar';
import Dashboard from './Dashboard';
import SigninPage from './auth/SigninPage';
import SignupPage from './auth/SignupPage';

class App extends Component {
  render() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        <Route exact path= '/' component= {Dashboard}/>
        <Route path='/signin' component={SigninPage}/> 
        <Route path='/signup' component={SignupPage}/>        
      </Switch>
    </BrowserRouter>
  );
}
}
export default App;
