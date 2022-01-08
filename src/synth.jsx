import React from "react";
import Bay from "./Bay";
import Osc from "./Osc";
import Label from "./Label";
import {
	Lowpass,
	Highpass
} from "./Filter";
import speaker from "./speaker";

const synth = () => {
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
					<div className="body row">
						<Bay module={[
							<Osc name="Sine" type="sine" />,
							<Osc name="Square" type="square" />,
							<Osc name="Sawtooth" type="sawtooth" />,
							<Osc name="Triangle" type="triangle" />
						]} />
					</div>
				</div>
				<div>
					<div className="head">
						<Label text="Filter" />
					</div>
					<div className="body row">
						<Bay module={[
							<Lowpass />,
							<Highpass />
						]} />
					</div>
				</div>
				<div>
					<div className="head">
						<Label text="Output" />
					</div>
					<div className="body row">
						<Bay module={[
							speaker()
						]} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default synth;
