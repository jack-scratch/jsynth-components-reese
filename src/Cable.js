import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			start: [
				0,
				0
			],
			end: [
				100,
				0
			],
			mid: [
				50,
				100
			]
		};

		this.drag = this.drag.bind(this);
	}

	drag() {
		alert('asdf');
	}

	render() {
		return (
			<svg className="cable" onClick={this.drag} onClick={this.drag}>
				<path d={'M ' + this.state.start[0] + ' ' + this.state.start[1] + ' C ' + this.state.start[0] + ' ' + this.state.start[1] + ', ' + this.state.mid[0] + ' ' + this.state.mid[1] + ', ' + this.state.end[0] + ' ' + this.state.end[1]} />
			</svg>
		);
	}
};

export default Cable;
