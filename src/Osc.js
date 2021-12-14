import React from 'react';
import Source from './Source';

class Osc extends Source {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Source knob={[
				this.props.knob
			]} port={[
				"Out"
			]} />
		);
	}
};

export default Osc;
