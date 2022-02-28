import React, {Component, Fragment} from 'react';

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
                    <input type="text" className="form-control" placeholder='Nama' onChange={(ev)=>this.setState({nama : ev.target.value})}  />
                    <p>{this.state.nama}</p>
                </div>   
            </Fragment>
        )
    }
}
export default Body;