import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inPoint: this.props.inPoint,
			outPoint: null
		};

		this.midX = this.midX.bind(this);
		this.midY = this.midY.bind(this);
	}

	midX() {
		let delta = this.props.endCurr[0] - this.props.startCurr[0];

		return this.props.startCurr[0] + (delta / 2);
	}

	midY() {
		return (this.props.endCurr[1] > this.props.startCurr[1] ? this.props.endCurr[1] : this.props.startCurr[1]) * 1.6;
	}

	render() {
		return (
			<svg className="cable">
				<path d={`M ${this.props.startCurr[0]},${this.props.startCurr[1]} C ${this.props.startCurr[0]},${this.props.startCurr[1]} ${this.midX()},${this.midY()} ${this.props.endCurr[0]},${this.props.endCurr[1]}`} />
			</svg>
		);
	}
}

export default Cable;
