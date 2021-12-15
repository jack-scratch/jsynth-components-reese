import React from "react";

class Nut extends React.Component {
	render() {
		const rot = Math.PI * 2;

		const n = 3 * 2;

		const stride = rot / n;

		let pt = [];
		for (let i = 0; i < rot; i++) {
			let idx = i * stride;

			pt.push([
				Math.cos(idx),
				Math.sin(idx)
			]);
		}

		const hexRad = 26;
		const portRad = 10;

		let serial = "";
		for (let i = 0; i < pt.length; i++) {
			let op;
			if (i) {
				op = "L";
			} else {
				op = "M";
			}

			let node = op + " " + (portRad + (pt[i][0] * hexRad)) + ", " + (portRad + (pt[i][1] * hexRad))

			serial += node;
		}
		serial += " Z";

		return (
			<path d={serial} />
		);
	}
};

export default Nut;
