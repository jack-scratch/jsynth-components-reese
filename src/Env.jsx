import React from "react";
import {
	Btn
} from "./Btn";
import Knob from "./Knob";

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
			atk: 0.3,
			decay: 0.7,
			sust: 600.0,
			rel: 0.3
		};
	}

	render() {
		return (
			<div className="sys">
				<div className="body">
					<Btn hookPush={() => {
						this.src = window.ctx.createOscillator();
						this.src.type = this.init["src"]["type"];

						// route
						this.src.connect(this.filter);
						this.filter.connect(window.ctx.destination);

						// start
						this.src.start();

						this.filter.frequency.linearRampToValueAtTime(this.init["filter"]["hz"], window.ctx.currentTime + this.state.atk);

						this.filter.frequency.exponentialRampToValueAtTime(this.state.sust, window.ctx.currentTime + this.state.atk + this.state.decay);

						this.filter.frequency.exponentialRampToValueAtTime(
							1.0,
							window.ctx.currentTime + this.state.atk + this.state.decay + this.state.rel
						);
					}} hookRel={() => {
						this.src.disconnect();

						this.filter.frequency.value = 1.0;

						this.filter.frequency.cancelScheduledValues(window.ctx.currentTime);
					}} />
				</div>
				<div className="cont ctrl" style={{
					display: "flex"
				}}>
					<div>
						<div className="head">
							<div className="mark">Attack</div>
						</div>
						<div className="body">
							<Knob hook={() => console.log("asdf")} min={0.0} max={1.0} />
						</div>
					</div>
					<div>
						<div className="head">
							<div className="mark">Decay</div>
						</div>
						<div className="body">
							<Knob hook={() => console.log("asdf")} min={0.0} max={1.0} />
						</div>
					</div>
					<div>
						<div className="head">
							<div className="mark">Sustain</div>
						</div>
						<div className="body">
							<Knob hook={() => console.log("asdf")} min={1.0} max={1000.0} />
						</div>
					</div>
					<div>
						<div className="head">
							<div className="mark">Release</div>
						</div>
						<div className="body">
							<Knob hook={() => console.log("asdf")} min={0.0} max={1.0} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Env;
