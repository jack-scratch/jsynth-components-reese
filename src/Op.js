import './App.css';

import React from 'react';

import Source from './Source';
import Label from './Label';
import Param from './Param';

class Op extends Source {
	constructor(props) {
		super(props);

		// source
		this.state = {
			osc: this.props.ctx.createOscillator()
		};

		this.state.osc.type = 'sine';
		this.state.osc.frequency.value = 440.0;

		// start
		this.state.osc.start();

		this.play = this.play.bind(this);
	}

	play() {
		this.state.osc.connect(this.props.ctx.destination);
	}

	render() {
		return (
			<div onClick={this.play} className="op">
				<div className="head">
					<Label text={this.props.name} />
				</div>
				<div className="body">
					<Param name="Frequency" rad={25} />
					<Param name="Volume" rad={40} val={0} />
				</div>
			</div>
		);
	}
};

export default Op;
