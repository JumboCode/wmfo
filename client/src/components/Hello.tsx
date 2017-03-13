import * as React from "react";
import {Link} from "react-router";
export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
    	return (
    		<div>
						<a href="">
						  <img id="logo" src="https://www.wmfo.org/wp-content/uploads/2016/01/Logo-1.png" alt="WMFO"  />

						</a>

						<div id="phone">Call in! 855-915-WMFO</div>

						<ul>
						  <li><a className ="active" href="#home">Home</a></li>
						  <li><a href="#contact">Contact</a></li>
						  <li><a href="#about">About</a></li>
						</ul>

						<div id="main">
						  <div id="user"><h1>User Profile</h1>

                			<li><Link to="/hello">Hello</Link></li>
               			 	<li><Link to="/show_form">Show Form</Link></li>

						   
						  </div>
						  <div id="studio">
						    <img id="studio_pic" src="https://www.wmfo.org/wp-content/uploads/2017/02/WmfoStudioAMainBoardPano.2016.04.01.CC-By-EdwardBeuchert.Large_-1.jpg" alt="Studio"/>
						  </div>
						</div>
			</div>
		);
    }
}
