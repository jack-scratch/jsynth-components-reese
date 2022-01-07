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
		<Bay body={[
			<div>
				<div className="head">
					<div className="body">
						<h1>Synth</h1>
					</div>
				</div>
				<div className="body">
					<div>
						<div className="head">
							<Label text="Bank" />
						</div>
						<div className="body row">
							<Osc name="Sine" type="sine" />
							<Osc name="Square" type="square" />
							<Osc name="Sawtooth" type="sawtooth" />
							<Osc name="Triangle" type="triangle" />
						</div>
					</div>, <div>
						<div className="head">
							<Label text="Filter" />
						</div>
						<div className="body row">
							<Lowpass />
							<Highpass />
						</div>
					</div>, <div>
						<div className="head">
							<Label text="Output" />
						</div>
						<div className="body">
							{speaker()}
						</div>
					</div>
				</div>
			</div>
		]} />
	);
}

export default synth;
