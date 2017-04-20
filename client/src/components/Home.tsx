import * as React from "react";
export interface HomeProps { compiler: string; framework: string; }

export class Home extends React.Component<HomeProps, undefined> {
    render() {
    	return (
    		<div id="home">
						<div id="main">
						<div id="user"><h1>User Profile</h1>
               			 	<ul>
               			 		<li><a>Name:</a></li>

               			 		<li><a>DJ Name:</a></li>
               			 	</ul>
						</div>

						<div id="studio">
						  
						   	<img id="studio_pic" src="https://www.wmfo.org/wp-content/uploads/2017/02/WmfoStudioAMainBoardPano.2016.04.01.CC-By-EdwardBeuchert.Large_-1.jpg" alt="Studio"/>
						  </div>
						</div>
			</div>
		);
    }
}
