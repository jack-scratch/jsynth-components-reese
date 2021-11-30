import './App.css';

import React from 'react';

import Label from './Label';
import Knob from './Knob';

const Op = (props) => {
	return <div className="op">
		<div className="head">
			<Label text={props.name} />
		</div>
		<div className="head">
			<Knob />
		</div>
	</div>;
}

export default Op;
