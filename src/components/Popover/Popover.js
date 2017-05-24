import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PopoverContent from './PopoverContent';

class Popover extends Component {

	static propTypes = {
		hoverElement: PropTypes.object,
		children: PropTypes.object,
		position: PropTypes.string
	}

	constructor(props){
		super(props);
		this.state={
			visible: false,
			
		}
	}

	togglePopover(e) {
		const { visible } = this.state;
		this.setState({visible: !visible});	
	}

	render() {
		const { hoverElement, children, position } = this.props;
		const { visible } = this.state;

		const showContent = visible ? (
				<PopoverContent
					content={children}
					position={position}
					togglePopover={this.togglePopover.bind(this)}/>
		
		) : null;

		return(
			<div className="popover">
				<div className="popover-hover" onClick={ this.togglePopover.bind(this) } ref="hover">
					{hoverElement}
				</div>
				{showContent}

			</div>
		);
	}
}
export default Popover;
