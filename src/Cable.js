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
			]
		};
	}

	render() {
		return (
			<svg className="cable" onClick={this.drag}>
				<path d={'M ' + this.state.start[0] + ' ' + this.state.start[1] + ' C ' + 50 + ' ' + 50 + ', ' + 100 + ' ' + 150 + ', ' + this.state.end[0] + ' ' + this.state.end[1]} />
			</svg>
		);
	}
};

export default Cable;
