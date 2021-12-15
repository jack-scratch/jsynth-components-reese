import React from 'react';
import Effect from './Effect';

class Gain extends Effect {
	constructor(props) {
		super(props);
	}

	render() {
		let amp = this.props.ctx.createGain();

		return (
			<Effect name='Gain' param={[
				{
					name: 'Level'
				}
			]} paramRef={amp.gain} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Gain;
