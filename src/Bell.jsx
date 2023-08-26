import React from "react";
import {
	Btn
} from "./Btn";
import Knob from "./Knob";
import Label from "./Label";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
	faBell
} from "@fortawesome/free-solid-svg-icons"
import {
	unit
} from "./fmt";

import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

class Bell extends React.Component {
	constructor(props) {
		super(props);

		this.filter = window.ctx.createBiquadFilter();

		this.decay = 1.0;

		this.hit = this.hit.bind(this);
	}

	hit() {
		let obj = window.ctx.createOscillator();
		obj.type = "sine";
		obj.frequency.value = 1200.0;

		let excite = window.ctx.createOscillator();
		excite.type = "triangle";
		excite.frequency.value = 1000.0;

		this.filter.frequency.value = 800.0;

		this.filter.frequency.exponentialRampToValueAtTime(1.0, window.ctx.currentTime + this.decay);

		// Route
		excite.connect(obj.frequency);
		obj.connect(this.filter);
		this.filter.connect(window.ctx.destination);

		// Schedule
		obj.start();

		obj.stop(window.ctx.currentTime + this.decay);
	}

	render() {
		return (
			<div className="sys body">
				<div className="head">
					<h1>
						<FontAwesomeIcon icon={faBell} />
					</h1>
				</div>
				<div className="ctrl">
					<div className="head" style={{
						textAlign: "center"
					}}>
						<Label text="Decay" />
					</div>
					<div className="body">
						<Knob min={300.0} max={1000.0} hookTurn={(val) => {
							this.decay = val / 1000;
						}} unit={unit["time"][0]} />
					</div>
				</div>
				<div className="body">
					<Btn hookPush={this.hit} />
				</div>
			</div>
		);
	}
}

export default Bell;
