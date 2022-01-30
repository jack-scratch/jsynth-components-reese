import React from "react";
import {
	rotRad
} from "./layout";
import {
	ws,
	sep
} from "./path";

class Quant extends React.Component {
	rot = Math.PI * 2;

	render() {
		let pt = [];

		const n = 6;
		const stride = this.rot / n;

		const sz = this.props.rad;

		const dipFac = 6;
		const dip = sz - dipFac;

		const sheerFac = 0.1;

		let serial = "";

		serial += `M ${Math.cos(sheerFac) * sz},${Math.sin(sheerFac) * sz}`;
		serial += ws;

		for (let i = 0; i < n; i++) {
			let fst = i + sheerFac;
			let snd = (i + 1) - sheerFac;
			let mid = i + 0.5;

			let curve = `C ${Math.cos(fst * stride) * sz},${Math.sin(fst * stride) * sz} ${Math.cos(mid * stride) * dip},${Math.sin(mid * stride) * dip} ${Math.cos(snd * stride) * sz},${Math.sin(snd * stride) * sz}`;

			serial += ws;
			serial += curve;

			let ln = `L ${Math.cos(snd * stride) * sz},${Math.sin(snd * stride) * sz} ${Math.cos((snd + (sheerFac * 2)) * stride) * sz},${Math.sin((snd + (sheerFac * 2)) * stride) * sz}`;

			serial += ws;
			serial += ln;
		}

		return (
			<path d={serial} transform={`translate(${this.props.rad} ${this.props.rad})`} />
		);
	}
}

export default Quant;
