import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Popover from '../Popover/Popover'; 

export default
class Test extends Component{
	
	render() {
		return(
			<Layout
				title="Popover component">
				<div>
					<p>Example</p>
					<Popover 
						hoverElement={(<big><a href="#" title="Click"><span className="fa fa-user"></span></a></big>)}
						position="left">
						<div>
							<p><span className="fa fa-cogs"></span> Settings</p>
							<p><span className="fa fa-user"></span> Profile</p>
						</div>
					</Popover>	
				</div>			
			</Layout>
		);
	}
}