import React from "react";
import Osc from "./Osc";
import Knob from "./Knob";
import Label from "./Label";
import speaker from "./speaker";

const synth = () => {
	const infoSrc = [
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

	let osc = [];
	for (let i = 0; i < 4; i++) {
		osc.push(window.ctx.createOscillator());

		osc[i].type = infoSrc[i].type;
	}

	const infoFx = [
		{
			name: "Lowpass",
			type: "lowpass"
		}, {
			name: "Highpass",
			type: "highpass"
		}
	];

	let fx = [];
	for (let i = 0; i < 2; i++) {
		fx.push(window.ctx.createBiquadFilter());

		fx[i].type = infoFx[i].type;
	}

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
						<div className="row">
							{osc.map((el, i) => <div>
								<div className="head">
									<Label text={infoSrc[i]["name"]} />
								</div>
								<div className="body">
									<Knob param={el.frequency} key={i} />
								</div>
							</div>)}
						</div>
					</div>
				</div>
				<div>
					<div className="head">
						<Label text="Filter" />
					</div>
					<div className="row">
						<div>
							<div className="head">
								<Label text="Lowpass" />
							</div>
							<div className="body">
								<Knob param={fx[0].frequency} />
							</div>
						</div>
						<div>
							<div className="head">
								<Label text="Highpass" />
							</div>
							<div className="body">
								<Knob param={fx[1].frequency} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default synth;
