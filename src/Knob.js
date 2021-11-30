import React from 'react';

const Knob = (props) => {
	const
		rad = 50,
		diam = rad * 2,

		rot = Math.PI * 2;

	let dir = true;

	return (
		<svg className="knob" width="50" height="50">
			<circle cx="25" cy="25" r="25" fill="#333" />
			<line x1="25" x2="25" y1="34" y2="50" stroke-width="3" stroke="grey" />
		</svg>
	);
}

export default Knob;
