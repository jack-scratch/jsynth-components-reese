import React from "react";
import Source from "./Source";
import ctx from "./ctx";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			osc: ctx.createOscillator(),
			amp: ctx.createGain(),
			hz: 0,
			level: 0
		};

		this.state.osc.type = this.props.type;
		this.state.osc.frequency.value = this.state.hz;

		this.state.amp.gain.value = this.state.level;

		this.state.osc.start();

		this.state.osc.connect(this.state.amp);
	}

	render() {
		return (
			<Source name="Operator" refer={[
				{
					name: "Frequency",
					point: this.state.osc.frequency
				}, {
					name: "Volume",
					point: this.state.amp.gain
				}
			]} port={[
				"out"
			]} />
		);
	}
}

export default Op;
