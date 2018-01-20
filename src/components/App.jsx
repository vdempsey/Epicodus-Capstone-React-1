import React from 'react';
import Header from './Header';
import TestimonialList from './TestimonialList';
import Splash from './Splash';
import Contact from './Contact';
import Error404 from './Error404';
import Register from './Register';
import {  Switch, Route } from 'react-router-dom';



function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/Contact' component={Contact} />
        <Route path='/TestimonialList' component={TestimonialList} />
        <Route path='/Register' component={Register} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
