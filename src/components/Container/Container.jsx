import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

function Container({location}) {
  return <div className="content">
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 300, exit: 300 }}
        classNames={'fade'}
      >
        <Switch location={location}>
          {/* <Route exact path={process.env.PUBLIC_URL + '/tmcs-hosted2'} render={ (routerProps) => < Home routerProps={routerProps} />} /> */}
          <Route exact path={process.env.PUBLIC_URL + '/tmcs-hosted2'} component={Home} />
          {/* <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} />} /> */}
          <Route path={process.env.PUBLIC_URL + "/tmcs-hosted2/about"} component={About} />
          <Route path={process.env.PUBLIC_URL + "/tmcs-hosted2/contact"} component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>;
}

export default withRouter(Container);
