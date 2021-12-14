import React from 'react';

class Nut extends React.Component {
	render() {
		const rot = Math.PI * 2;

		const n = 3 * 2;

		const stride = rot / n;

		let pt = [];
		for (let i = 0; i < rot; i++) {
			let step = i * stride;

			pt.push([
				Math.cos(step),
				Math.sin(step)
			]);
		}

		const radius = 26;
		const offset = radius;

		let serial = '';
		for (let i = 0; i < pt.length; i++) {
			let op;
			if (i) {
				op = 'L';
			} else {
				op = 'M';
			}

			let node = op + ' ' + (offset + (pt[i][0] * radius)) + ', ' + (offset + (pt[i][1] * radius))

			serial += node;
		}
		serial += ' Z';

		return (
			<path d={serial} />
		);
	}
};

export default Nut;
