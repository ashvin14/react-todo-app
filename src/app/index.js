import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/Header"
import {app} from "./components/app"





class App extends React.Component {
   render() {
    return (
        <Router>
        <div>
        <Route  path="/" component={Header}/>
        <Route path = "/app" component ={app}/>
      
        </div>
        </Router>
      
    );
    }
}
 
render( <App/>,window.document.getElementById("app"));