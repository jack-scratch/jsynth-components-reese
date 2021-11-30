import './App.css';

import React from 'react';

import Label from './Label';
import Param from './Param';

const Op = (props) => {
	// source
	let osc = props.ctx.createOscillator();
	osc.type = 'sine';
	osc.frequency.value = 440.0;

	osc.connect(props.ctx.destination);

	// start
	osc.start();

	return <div className="op">
		<div className="head">
			<Label text={props.name} />
		</div>
		<div className="body">
			<Param name="Frequency" rad="25" val="0" />
			<Param name="Volume" rad="40" val="0" />
		</div>
	</div>;
}

export default Op;
