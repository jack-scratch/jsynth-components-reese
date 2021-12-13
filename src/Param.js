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
				<Knob param={props.param} rad={props.rad} />
			</div>
		</div>
	);
}

export default Param;
