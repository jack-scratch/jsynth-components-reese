import React from "react";

import "./Fader.css";

class Fader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			val: 0
		};

		this.drag = this.drag.bind(this);
	}

	drag() {
		this.setState((prevState, props) => ({
			val: prevState.val + 1
		}));
	}

	render() {
		return (
			<div className="fader">
				<div className="groove">
					<div className="thumb" style={{
						marginTop: this.state.val
					}} onMouseDown={this.drag}>
						<div className="mark"></div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className="inc"></svg>
			</div>
		);
	}
}

export default Fader;
