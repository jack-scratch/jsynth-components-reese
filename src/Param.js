import React from 'react';
import Knob from './Knob';

const Param = (props) => {
	return (
		<div>
			<div className='head'>
				<div className='mark'>{props.name}</div>
			</div>
			<div className='body'>
				<Knob paramRef={props.paramRef} rad={props.rad} />
			</div>
		</div>
	);
}

export default Param;
