import React from "react";
import {
	rotRad
} from "./layout";
import {
	ws,
	sep
} from "./path";

class Quant extends React.Component {
	dipFac = 6;
	sheerFac = 0.1;

	render() {
		let pt = [];

		const stride = rotRad / this.props.n;

		const dip = this.props.rad - this.dipFac;

		let serial = "";

		serial += `M ${Math.cos(this.sheerFac) * this.props.rad},${Math.sin(this.sheerFac) * this.props.rad}`;
		serial += ws;

		for (let i = 0; i < this.props.n; i++) {
			let fst = i + this.sheerFac;
			let snd = (i + 1) - this.sheerFac;
			let mid = i + 0.5;

			let curve = `C ${Math.cos(fst * stride) * this.props.rad},${Math.sin(fst * stride) * this.props.rad} ${Math.cos(mid * stride) * dip},${Math.sin(mid * stride) * dip} ${Math.cos(snd * stride) * this.props.rad},${Math.sin(snd * stride) * this.props.rad}`;

			serial += ws;
			serial += curve;

			let ln = `L ${Math.cos(snd * stride) * this.props.rad},${Math.sin(snd * stride) * this.props.rad} ${Math.cos((snd + (this.sheerFac * 2)) * stride) * this.props.rad},${Math.sin((snd + (this.sheerFac * 2)) * stride) * this.props.rad}`;

			serial += ws;
			serial += ln;
		}

		return (
			<path d={serial} transform={`translate(${this.props.rad} ${this.props.rad})`} />
		);
	}
}

export default Quant;
