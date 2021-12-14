import React from 'react';
import Source from './Source';

class Op extends Source {
	render() {
		return (
			<Source name="Oscillator" knob={[
				"Frequency",
				"Volume"
			]} port={[
				"Out"
			]} />
		);
	}
};

export default Op;
