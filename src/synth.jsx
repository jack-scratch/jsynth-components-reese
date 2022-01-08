import React from "react";
import Osc from "./Osc";
import Knob from "./Knob";
import Label from "./Label";
import speaker from "./speaker";

const synth = () => {
	const name = [
		"Sine",
		"Square",
		"Sawtooth",
		"Triangle"
	];

	let osc = [];
	for (let i = 0; i < 4; i++) {
		osc.push(window.ctx.createOscillator());
	}

	return (
		<div className="sys">
			<div className="head">
				<h1>Synth</h1>
			</div>
			<div className="body">
				<div>
					<div className="head">
						<Label text="Bank" />
					</div>
					<div className="row">
						{osc.map((el, i) => <div>
							<div className="head">
								<Label text={name[i]} />
							</div>
							<div className="body">
								<Knob param={el.frequency} key={i} />
							</div>
						</div>)}
					</div>
				</div>
				<div>
					<div className="head">
						<Label text="Filter" />
					</div>
					<div className="row">
					</div>
				</div>
				<div>
					<div className="head">
						<Label text="Output" />
					</div>
					<div className="row">
					</div>
				</div>
			</div>
		</div>
	);
}

export default synth;
