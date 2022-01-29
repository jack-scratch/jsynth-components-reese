import React from "react";
import {
	Btn
} from "./Btn";

class Env extends React.Component {
	init = {
		"src": {
			"type": "sawtooth"
		},
		"filter": {
			"hz": 1000.0
		}
	};

	constructor(props) {
		super(props);

		this.src = null;

		this.filter = window.ctx.createBiquadFilter();
		this.filter.type = "lowpass";
		this.filter.frequency.value = 1.0;

		this.state = {
			atk: {
				"time": 0.3
			},
			decay: {
				"time": 0.7
			},
			sust: {
				"val": 600.0
			}
		};
	}

	render() {
		return (
			<div className="cont">
				<Btn hookDown={() => {
					this.src = window.ctx.createOscillator();
					this.src.type = this.init["src"]["type"];

					// route
					this.src.connect(this.filter);
					this.filter.connect(window.ctx.destination);

					// start
					this.src.start();

					this.filter.frequency.linearRampToValueAtTime(this.init["filter"]["hz"], window.ctx.currentTime + this.state.atk["time"]);

					this.filter.frequency.exponentialRampToValueAtTime(this.state.sust["val"], window.ctx.currentTime + this.state.atk["time"] + this.state.decay["time"]);
				}} hookUp={() => {
					this.src.disconnect();

					this.filter.frequency.value = 1.0;
				}} />
			</div>
		);
	}
}

export default Env;
