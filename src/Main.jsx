import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Views/Navbar';
import Body from './Views/Body';

class Main extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Fragment>
              <Navbar />
              {/* <Body /> */}
            </Fragment>
        )
    }
}
export default Main;