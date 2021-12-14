import React from 'react';
import Module from './Module';

class Effect extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module knob={[
				this.props.knob
			]} port={[
				"In",
				"Out"
			]} />
		);
	}
};

export default Effect;
