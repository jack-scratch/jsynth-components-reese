import React from "react";
import {
	rotRad
} from "./layout";

class Poly extends React.Component {
	render() {
		const stride = rotRad / this.props.n;

		let pt = [];
		for (let i = 0; i < rotRad; i++) {
			let idx = i * stride;

			pt.push([
				Math.cos(idx),
				Math.sin(idx)
			]);
		}

		const hexRad = 26;

		let serial = "";
		for (let i = 0; i < pt.length; i++) {
			let op;
			if (i) {
				op = "L";
			} else {
				op = "M";
			}

			let node = op + " " + ((pt[i][0] * hexRad)) + ", " + ((pt[i][1] * hexRad))

			serial += node;
		}
		serial += " Z";

		return (
			<path d={serial} transform={`translate(${hexRad} ${hexRad})`} />
		);
	}
};

export default Poly;
