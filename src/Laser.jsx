import React from "react";
import Knob from "./ctrl/Knob";

import {
	XS
} from "./ctrl/Btn";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faRocket
} from "@fortawesome/free-solid-svg-icons"

class Laser extends React.Component {
	ln = 0.3;

	filter;

	fire() {
		// Source
		let osc = window.ctx.createOscillator();
		osc.type = "triangle";
		osc.frequency.value = 2600.0;

		// Route
		osc.connect(this.filter);

		// Schedule
		osc.start();

		osc.frequency.exponentialRampToValueAtTime(1.0, window.ctx.currentTime + this.ln);

		osc.stop(window.ctx.currentTime + this.ln);
	}

	constructor() {
		super();

		this.fire = this.fire.bind(this);

		// Filter
		this.filter = window.ctx.createBiquadFilter();
		this.filter.type = "lowpass";
		this.filter.frequency.value = 1800.0;

		this.filter.connect(window.ctx.destination);
	}

	render() {
		return (
			<div className="cont body">
				<div className="head">
					<h1><FontAwesomeIcon icon={faRocket} /></h1>
				</div>
				<div className="cont body">
					<div className="mark">Power</div>
					<Knob />
				</div>
				<div className="cont body">
					<XS hookPush={this.fire} />
				</div>
			</div>
		);
	}
}

export default Laser;
