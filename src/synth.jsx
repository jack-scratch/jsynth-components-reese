import React from "react";
import Bay from "./Bay";
import Osc from "./Osc";
import {
	Lowpass,
	Highpass
} from "./Filter";
import speaker from "./speaker";

const synth = () => {
	return (
		<Bay module={[
			<div>
				<Osc name="Sine" type="sine" />
				<Osc name="Square" type="square" />
				<Osc name="Sawtooth" type="sawtooth" />
				<Osc name="Triangle" type="triangle" />
			</div>, <div>
				<Lowpass />
				<Highpass />
			</div>, <div>
				{speaker()}
			</div>
		]} />
	);
}

export default synth;
