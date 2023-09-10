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

	constructor() {
		super();

		// Source
		this.osc = window.ctx.createOscillator();
		this.osc.type = "sawtooth";
		this.osc.frequency.value = 1000.0;

		// Filter
		this.filter = window.ctx.createBiquadFilter();
		this.filter.type = "lowpass";
		this.filter.frequency.value = 1000.0;

		// Route
		this.osc.connect(this.filter);
		this.filter.connect(window.ctx.destination);

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
					<Btn label="Fire" />
				</div>
			</div>
		);
	}
}

export default Laser;
