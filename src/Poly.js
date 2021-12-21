import React from "react";
import {
	rotRad
} from "./layout";
import {
	ws,
	sep
} from "./path";

class Poly extends React.Component {
	render() {
		const stride = rotRad / this.props.n;

		const bevel = 0.06;

		let pt = [];
		for (let i = 0; i < rotRad; i++) {
			for (let b = 0; b < 2; b++) {
				let step = (i + ((b ? 1 : -1) * bevel)) * stride;

				pt.push([
					Math.cos(step),
					Math.sin(step)
				]);
			}
		}

		let serial = "";
		for (let i = 0; i < pt.length; i++) {
			let tok = ws + ((pt[i][0] * this.props.rad)) + ws + sep + + ((pt[i][1] * this.props.rad))

			serial += tok;
		}

		return (
			<polygon points={serial} transform={`translate(${this.props.rad} ${this.props.rad})`} />
		);
	}
}

export default Poly;
