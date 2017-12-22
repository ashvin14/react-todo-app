import React from "react";
import {Link} from "react-router-dom"

export class Header extends React.Component{
  render() {
    return(
      <div>
       
        <nav className="navbar navbar-default">
	            <div className="container">
	                <div className="navbar-header">
	                    <ul className="nav navbar-nav">
	                        <li><Link to={"/app"} activeStyle={{color: "red"}}>app</Link></li>
	                        
	                       
	                    </ul>
	                </div>
	            </div>
        </nav>
      </div>
    );
  }
}