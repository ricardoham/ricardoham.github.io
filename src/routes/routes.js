import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../pages/profile';
import Knowledge from '../pages/knowledge';
import Resume from '../pages/resume';
import Projects from '../pages/projects';
import Contact from '../pages/contacts';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Profile} />
    <Route path="/knowledge" component={Knowledge} />
    <Route path="/resume" component={Resume} />
    <Route path="projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Routes;
