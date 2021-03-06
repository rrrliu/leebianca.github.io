import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './Header.css';
import Navigation from './Navigation.js';

class Header extends Component {
  render() {
    return (
      <div className="Header-link-container">
            <a className="Header-link" href={this.props.link}>{this.props.name}</a>
      </div>
    //   <BrowserRouter>
    //   <Switch>
    //     <Navigation/>
    //     <Route exact path='/' component={Home} />
    //     <Route path="/about" component={About} />
    //     <Route path="/contact" component={Contact} />
    //   </Switch>
    // </BrowserRouter>
    );
  }
}

export default Header;
