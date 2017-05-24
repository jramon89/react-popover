import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class popoverContent extends Component {
	static propTypes = {
		content: PropTypes.object,
		togglePopover: PropTypes.func,
		position: PropTypes.string
	}

	constructor(props){
		super(props);
		this.state={
			visible: false,
			limits:{
				hover:{
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				},
				content:{
					top: 0,
					bottom: 0,
					left: 0,
					right: 0
				}
			},
			coors:{
				x:0,
				y:0
			},
			i:0,
			e:null
			
		};
		this.click = this.limits.bind(this);
	}
	


	limits(e) {
		const { togglePopover, hover } = this.props;
		const { visible, limits } = this.state;

		const evalC = (e.clientX >= limits.content.right 
			&& e.clientX <= limits.content.left 
			&& e.clientY >= limits.content.top 
			&& e.clientY <= limits.content.bottom);

		if(!evalC){
			togglePopover();
		}
	}

	componentDidMount() {
		const content = this.refs.content.getBoundingClientRect();
	
		this.setState({ 
			limits:{
				content:{
					top: content.top,
					bottom: content.bottom,
					left: content.right, 
					right: content.left
				}
			}
		})
		document.addEventListener('click', this.click);
	}
	
	componentWillUnmount() {
		document.removeEventListener('click', this.click);
	}

	render() {
		const { content, position } = this.props;
		const side = position ? (position === 'right' ? { right: 0 } : { left: 0 }) : null;

		return(
			<div className="popover-content" ref="content" style={side}>
				<div className="popover-items-content" ref="list" >
					{this.props.content}
				</div>
			</div>
		);
	}
}
