import React from "react";
import Osc from "./Osc";
import Knob from "./Knob";
import Label from "./Label";
import speaker from "./speaker";

const synth = () => {
	let osc = window.ctx.createOscillator();

	const bank = [
		"Sine",
		"Square",
		"Sawtooth",
		"Triangle"
	];

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
						{bank.map((el, i) => <div>
							<div className="head">
								<Label text={el} />
							</div>
							<div className="body">
								<Knob param={osc.frequency} key={i} />
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
