import React from 'react';
import Module from './Module';

class Source extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module name={this.props.name} paramRef={this.props.paramRef} knob={[
				this.props.knob
			]} port={[
				'Out'
			]} />
		);
	}
};

export default Source;
