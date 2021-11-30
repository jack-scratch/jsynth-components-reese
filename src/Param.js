import React from 'react';

import Knob from './Knob';
import Label from './Label';

const Param = (props) => {
	const
		diam = props.rad * 2,
		lineLn = 16;

	return (
		<div>
			<div className="head">
				<div className="mark">{props.name}</div>
			</div>
			<div className="body">
				<Knob val={props.val} rad={props.rad} />
			</div>
		</div>
	);
}

export default Param;
