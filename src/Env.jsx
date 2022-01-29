import React from "react";
import {
	Btn
} from "./Btn";

class Env extends React.Component {
	constructor(props) {
		super(props);

		this.src = null;

		this.filter = window.ctx.createBiquadFilter();
		this.filter.type = "lowpass";
		this.filter.frequency.value = 100.0;
	}

	render() {
		return (
			<div className="cont">
				<Btn hookDown={() => {
					this.src = window.ctx.createOscillator();
					this.src.type = "sawtooth";

					// route
					this.src.connect(this.filter);
					this.filter.connect(window.ctx.destination);

					// start
					this.src.start();

					this.filter.frequency.linearRampToValueAtTime(1000.0, window.ctx.currentTime + 0.3);
				}} hookUp={() => {
					this.src.disconnect();

					this.filter.frequency.value = 100.0;
				}} />
			</div>
		);
	}
}

export default Env;
