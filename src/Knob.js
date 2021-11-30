import React from 'react';

const Knob = (props) => {
	const
		diam = props.rad * 2,
		lineLn = 16;

	return (
		<svg className="knob raised" width={diam} height={diam} transform={"rotate(" + props.val + ")"}>
			<circle cx={props.rad} cy={props.rad} r={props.rad} fill="#333" />
			<line x1={props.rad} x2={props.rad} y1={diam - lineLn} y2={props.rad * 2} strokeWidth="3" stroke="grey" />
		</svg>
	);
}

export default Knob;
