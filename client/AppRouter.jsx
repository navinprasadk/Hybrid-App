import React,  {Component} from 'react';
import Signin from './components/signin.jsx';
import Signup from './components/signup.jsx';
import Home from './components/home.jsx';
import Feedback from './components/feedback.jsx';
import Contact from './components/contact.jsx'
import PageNotFound from './components/pagenotfound.jsx';

import { HashRouter, Route, Switch} from 'react-router-dom';

export default class AppRouter extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <HashRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/feedback' component={Feedback}/>
        <Route path='/contact' component={Contact}/>

        <Route component={PageNotFound}/>
      </Switch>
      </HashRouter>
    );
  }
};
