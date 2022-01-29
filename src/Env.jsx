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
			"hz": 100.0
		}
	};

	constructor(props) {
		super(props);

		this.src = null;

		this.filter = window.ctx.createBiquadFilter();
		this.filter.type = "lowpass";
		this.filter.frequency.value = this.init["filter"]["hz"];
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

					this.filter.frequency.linearRampToValueAtTime(1000.0, window.ctx.currentTime + 0.3);

					this.filter.frequency.exponentialRampToValueAtTime(600.0, window.ctx.currentTime + 0.3 + 0.3);
				}} hookUp={() => {
					this.src.disconnect();

					this.filter.frequency.value = this.init["filter"]["hz"];
				}} />
			</div>
		);
	}
}

export default Env;
