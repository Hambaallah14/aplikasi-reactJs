import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from "react-router-dom";

class Body extends Component{
    constructor(){
        super();
        this.state = {
            nama : ''
        }
    }
    render(){
        return(
            <Fragment>
                <div className='container mt-4'>
                    <h1>Footer</h1>
                    {/* <input type="text" className="form-control" placeholder='Nama' onChange={(ev)=>this.setState({nama : ev.target.value})}  /> */}
                    {/* <p>{this.state.nama}</p> */}
                </div>   
            </Fragment>
        )
    }
}
export default Body;