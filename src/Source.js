import React from 'react';
import Module from './Module';

class Source extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module name={this.props.name} knob={[
				this.props.knob
			]} port={[
				'Out'
			]} />
		);
	}
};

export default Source;
