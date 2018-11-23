import React, { Component } from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { history } from "../_helpers/history";

import Authorized from "../components/hoc/authorization";
import Footer from '../components/common/footer';
import Header from '../components/common/header';
import Home from '../pages/home';
import Content from '../components/common/content';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

class App extends Component {
  render() {

    const User = Authorized(["user"]);

    return (
      <Router history={history} {...this.state}>
        <div className="container-wrapper">

          <Header history={history} {...this.state}></Header>

          <div className="main-wrapper">
            <div className="cont" style={{marginTop: 0}}>

              <Route path="/" exact component={Home} />
              <Route path="/dashboard" exact component={User(Dashboard)} />
              <Route path="/profile" exact component={User(Profile)} />

              <Route path="/login" exact component={Home} />
              
            </div>
           
            <Footer></Footer>

          </div>

        </div >
      </Router>
    
    );
  }
}

export default App;
