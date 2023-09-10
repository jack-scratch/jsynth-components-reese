import React from "react";
import Knob from "./ctrl/Knob";

import {
	Btn
} from "./ctrl/Btn";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faRocket
} from "@fortawesome/free-solid-svg-icons"

class Laser extends React.Component {
	osc;
	filter;

	fire() {
		this.filter.connect(window.ctx.destination);

		this.osc.frequency.value = 2600.0;
		this.osc.frequency.exponentialRampToValueAtTime(1.0, window.ctx.currentTime + 0.3);
	}

	constructor() {
		super();

		this.fire = this.fire.bind(this);

		// Source
		this.osc = window.ctx.createOscillator();
		this.osc.type = "triangle";
		this.osc.frequency.value = 2600.0;

		// Filter
		this.filter = window.ctx.createBiquadFilter();
		this.filter.type = "lowpass";
		this.filter.frequency.value = 1800.0;

		// Route
		this.osc.connect(this.filter);

		// Schedule
		this.osc.start();
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
					<Btn label="Fire" hookPush={this.fire} />
				</div>
			</div>
		);
	}
}

export default Laser;
