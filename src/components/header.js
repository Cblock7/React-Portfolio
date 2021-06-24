import React, { Component } from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import Navigation from "./navigation";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from './contact';
import Resume from './resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </HashRouter>
    );
  }
}

export default Header;