import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';

class Navbar extends Component{
    constructor(){
        super();
       
    }
    render(){
        return(
            <Fragment>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to ="/home" class="navbar-brand">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/footer" className="nav-link" aria-current="page">Footer</Link>
                                    </li>

                                    {/* <Route path="/" exact component={Body}/> */}
                                    {/* <Route path="/home" component={Body}/> */}
                                    {/* <Route path="/footer" component={Footer}/> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </Router>
            </Fragment>
        )
    }
}
export default Navbar;