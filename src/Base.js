import React, { Component } from 'react';
import {BrowserRouter ,Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import App from './App'
import Uploader from './components/Uploader'

class Base extends Component {


    render() { 

        return ( 
        <BrowserRouter>
            <div>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/admin/uploader" exact component={Uploader}/>
                <Route path="/:num" exact component={App}/>
                
            </div>

        </BrowserRouter>



         );
    }
}
 
export default Base;