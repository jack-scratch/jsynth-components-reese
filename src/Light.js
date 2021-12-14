import React from 'react';

import './Light.css';

class Light extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={'light ' + (this.props.on ? 'on' : 'off')}></div>
		);
	}
};

export default Light;
