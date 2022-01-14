import React from "react";
import {
	nutRad,
	portRad
} from "./layout";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super();

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
		let start = [];
		if (this.props.inPoint) {
			start = [
				this.props.inRefer.current.offsetLeft + nutRad + portRad,
				this.props.inRefer.current.offsetTop + nutRad + portRad
			];
		} else {
			start = this.props.startCurr;
		}

		let end = [];
		if (this.props.outPoint) {
			end = [
				this.props.outRefer.current.offsetLeft + nutRad + portRad,
				this.props.outRefer.current.offsetTop + nutRad + portRad
			];
		} else {
			end = this.props.endCurr;
		}

		return (
			<svg className="cable">
				<path d={`M ${start[0]},${start[1]} C ${start[0]},${start[1]} ${this.midX()},${this.midY()} ${end[0]},${end[1]}`} />
			</svg>
		);
	}
}

export default Cable;
