import './App.css';

import React from 'react';

import Label from './Label';

const Op = (props) => {
	return <div className="op">
		<Label text={props.name} />
	</div>;
}

export default Op;
