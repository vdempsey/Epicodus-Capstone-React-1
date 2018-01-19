import React from 'react';
import Header from './Header';
import TestimonialList from './TestimonialList';
import Splash from './Splash';
import Contact from './Contact';
import Email from './Email';
import Error404 from './Error404';
import {  Switch, Route } from 'react-router-dom';



function App(){
  return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Splash} />
          <Route path='/TestimonialList' component={TestimonialList} />
          <Route exact path='/Contact' component={Contact} />
          <Route path='/Contact/Email' component={Email} />
          <Route component={Error404} />
        </Switch>
      </div>
  );
}

export default App;
