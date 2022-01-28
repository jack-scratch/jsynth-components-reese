import React from "react";
import {
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
		let start = [
			this.props.inRefer.current.offsetLeft + 26 + portRad,
			this.props.inRefer.current.offsetTop + 26 + portRad
		];

		let end = [];
		if (this.props.outPoint) {
			end = [
				this.props.outRefer.current.offsetLeft + 26 + portRad,
				this.props.outRefer.current.offsetTop + 26 + portRad
			];
		} else {
			end = this.props.curr;
		}

		let delta = end[0] - start[0];

		return start[0] + (delta / 2);
	}

	midY() {
		let start = [];
		if (this.props.inPoint) {
			start = [
				this.props.inRefer.current.offsetLeft + 26 + portRad,
				this.props.inRefer.current.offsetTop + 26 + portRad
			];
		} else {
			start = this.props.curr;
		}

		let end = [];
		if (this.props.outPoint) {
			end = [
				this.props.outRefer.current.offsetLeft + 26 + portRad,
				this.props.outRefer.current.offsetTop + 26 + portRad
			];
		} else {
			end = this.props.curr;
		}

		return (end[1] > start[1] ? end[1] : start[1]) * 1.6;
	}

	render() {
		let start = [];
		if (this.props.inPoint) {
			start = [
				this.props.inRefer.current.offsetLeft + 26 + portRad,
				this.props.inRefer.current.offsetTop + 26 + portRad
			];
		} else {
			start = this.props.curr;
		}

		let end = [];
		if (this.props.outPoint) {
			end = [
				this.props.outRefer.current.offsetLeft + 26 + portRad,
				this.props.outRefer.current.offsetTop + 26 + portRad
			];
		} else {
			end = this.props.curr;
		}

		return (
			<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className="cable">
				<path d={`M ${start[0]},${start[1]} C ${start[0]},${start[1]} ${this.midX()},${this.midY()} ${end[0]},${end[1]}`} />
			</svg>
		);
	}
}

export default Cable;
