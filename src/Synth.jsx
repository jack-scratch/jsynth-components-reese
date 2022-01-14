import React from "react";
import Knob from "./Knob";
import Label from "./Label";

class Synth extends React.Component {
	constructor(props) {
		super();

		this.osc = window.ctx.createOscillator();

		this.infoSrc = [
			{
				name: "Sine",
				type: "sine"
			}, {
				name: "Square",
				type: "square"
			}, {
				name: "Sawtooth",
				type: "sawtooth"
			}, {
				name: "Triangle",
				type: "triangle"
			}
		];

		this.infoFx = [
			{
				name: "Lowpass",
				type: "lowpass"
			}, {
				name: "Highpass",
				type: "highpass"
			}
		];

		this.bank = [];
		for (let i = 0; i < this.infoSrc.length; i++) {
			this.bank.push(window.ctx.createOscillator());

			this.bank[i].type = this.infoSrc[i].type;
		}

		this.fx = [];
		for (let i = 0; i < this.infoFx.length; i++) {
			this.fx.push(window.ctx.createBiquadFilter());

			this.fx[i].type = this.infoFx[i].type;
		}

		// route
		for (let i = 0; i < this.bank.length; i++) {
			for (let j = 0; j < this.fx.length; j++) {
				this.bank[i].connect(this.fx[j]);
			}
		}

		for (let i = 0; i < this.fx.length; i++) {
			this.fx[i].connect(window.ctx.destination);
		}
	}

	render() {
		return (
			<div className="sys">
				<div className="head">
					<h1>Synth</h1>
				</div>
				<div className="body">
					<div>
						<div className="group">
							<div className="head">
								<Label text="Bank" />
							</div>
							<div className="body row">
								{this.bank.map((el, i) => <div key={i}>
									<div className="head">
										<Label text={this.infoSrc[i]["name"]} />
									</div>
									<div className="ctrl">
										<div className="body">
											<Knob param={el.frequency} min={1.0} max={1000.0} />
										</div>
									</div>
								</div>)}
							</div>
						</div>
					</div>
					<div>
						<div className="head">
							<Label text="Filter" />
						</div>
						<div className="body row">
							{this.fx.map((el, i) => <div key={i}>
								<div className="head">
									<Label text={this.infoFx[i]["name"]} />
								</div>
								<div className="ctrl">
									<div className="body">
										<Knob param={this.osc.frequency} min={1.0} max={3000.0} />
									</div>
								</div>
							</div>)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Synth;
