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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>;
}

export default withRouter(Container);