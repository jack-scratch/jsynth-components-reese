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

	const infoFx = [
		{
			name: "Lowpass",
			type: "lowpass"
		}, {
			name: "Highpass",
			type: "highpass"
		}
	];

	let bank = [];
	for (let i = 0; i < infoSrc.length; i++) {
		let osc = window.ctx.createOscillator();

		osc.type = infoSrc[i].type;

		bank.push(osc);
	}

	let fx = [];
	for (let i = 0; i < infoFx.length; i++) {
		let filter = window.ctx.createBiquadFilter();

		filter.type = infoFx[i].type;

		fx.push(filter);
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
						<div className="body row">
							{bank.map((el, i) => <div>
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
					<div className="body row">
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
