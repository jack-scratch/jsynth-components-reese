import React from "react";
import Bay from "./Bay.jsx";
import Osc from "./Osc.jsx";
import {
	Lowpass,
	Highpass
} from "./Filter.jsx";
import speaker from "./speaker.jsx";

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
