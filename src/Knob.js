import React from 'react';

const Knob = (props) => {
	return (
		<svg className="knob" width="50" height="50" transform={"rotate(" + props.val + ")"}>
			<circle cx="25" cy="25" r="25" fill="#333" />
			<line x1="25" x2="25" y1="34" y2="50" stroke-width="3" stroke="grey" />
		</svg>
	);
}

export default Knob;
